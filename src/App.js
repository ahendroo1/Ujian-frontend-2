import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import {SplitButton} from 'primereact/components/splitbutton/SplitButton';
import {Growl} from 'primereact/components/growl/Growl';

class App extends Component {

  constructor() {
    super();
    this.save = this.save.bind(this);
    this.state = {
        
    }


    this.items_pendidikan = [
        {label: 'Pendidikan Pra Sekolah', command: (e) => {
            this.growl.show({severity:'success', summary:'Berhasil', detail:'Data Pendidikan Sekolah di pilih'});
            this.setState({
              default_tingkatan: [
                {label: 'PAUD (Pendidikan Anak Usia Dini)', command: (e) => {
                  this.growl.show({severity:'warning', summary:'Berhasil', detail:'PAUD (Pendidikan Anak Usia Dini)'});
                }},
                {label: 'TK (Taman Kanak-kanak)',  command: (e) => {
                    this.growl.show({ severity: 'warning', summary: 'Berhasil', detail: 'TK (Taman Kanak-kanak)' });
                }},
                {label: 'RA (Raudhatul Athfal)',  command: (e) => {
                    this.growl.show({ severity: 'warning', summary: 'Berhasil', detail: 'RA (Raudhatul Athfal)' });
                }}
              ]
      
            });
            
        }},
        {label: 'Pendidikan Dasar',  command: (e) => {
            this.growl.show({ severity: 'success', summary: 'Berhasil', detail: 'Data Pendidikan Dasar di Pilih' });
            this.setState({
              default_tingkatan: [
                {label: 'SD (Sekolah Dasar)', command: (e) => {
                  this.growl.show({severity:'success', summary:'Berhasil', detail:'SD (Sekolah Dasar)'});
                }},
                {label: 'MI (Madrasah Ibtidaiyah)',  command: (e) => {
                    this.growl.show({ severity: 'warning', summary: 'Berhasil', detail: 'MI (Madrasah Ibtidaiyah)' });
                }},
                {label: 'SMP (Sekolah Menengah Pertama)',  command: (e) => {
                    this.growl.show({ severity: 'warning', summary: 'Berhasil', detail: 'SMP (Sekolah Menengah Pertama)' });
                }},
                {label: 'MTs (Madrasah Tsanawiyah)',  command: (e) => {
                    this.growl.show({ severity: 'warning', summary: 'Berhasil', detail: 'MTs (Madrasah Tsanawiyah)' });
                }},
              ]
      
            });
        }},
        {label: 'Pendidikan Menengah',  command: (e) => {
            this.growl.show({ severity: 'success', summary: 'Berhasil', detail: 'Data Pendidikan Dasar di Pilih' });
            this.setState({
              default_tingkatan: [
                {label: 'SMA (Sekolah Menengah Atas)', command: (e) => {
                  this.growl.show({severity:'warning', summary:'Berhasil', detail:'SMA (Sekolah Menengah Atas)'});
                }},
                {label: 'MA (Madrasah Aliyah)',  command: (e) => {
                    this.growl.show({ severity: 'warning', summary: 'Berhasil', detail: 'MA (Madrasah Aliyah)' });
                }},
                {label: 'SMK (Sekolah Menengah Kejuruan)',  command: (e) => {
                    this.growl.show({ severity: 'warning', summary: 'Berhasil', detail: 'SMK (Sekolah Menengah Kejuruan)' });
                }}
              ]
      
            });
        }},
        {label: 'Pendidikan Tinggi',  command: (e) => {
            this.growl.show({ severity: 'success', summary: 'Berhasil', detail: 'Data Pendidikan Dasar di Pilih' });
            this.setState({
              default_tingkatan: [
                {label: 'D3 Diploma', command: (e) => {
                  this.growl.show({severity:'warning', summary:'Berhasil', detail:'D3 Diploma'});
                }},
                {label: 'S1/D4 Sarjana',  command: (e) => {
                    this.growl.show({ severity: 'warning', summary: 'Berhasil', detail: 'S1/D4 Sarjana' });
                }},
                {label: 'S2 Magister',  command: (e) => {
                    this.growl.show({ severity: 'warning', summary: 'Berhasil', detail: 'S2 Magister' });
                }},
                {label: 'S3 Doktoral',  command: (e) => {
                    this.growl.show({ severity: 'warning', summary: 'Berhasil', detail: 'S3 Doktoral' });
                }}
              ]
              
            });
        }}

    ];


    this.items_tingkatan_Pendidikan_Dasar = [
      {label: 'SD (Sekolah Dasar))', command: (e) => {
        this.growl.show({severity:'success', summary:'Berhasil', detail:'PAUD (Pendidikan Anak Usia Dini)'});
      }}

    ];
  }


  componentDidMount(){
    this.setState({default_tingkatan: [{label: 'Pilih',command: (e) => {this.growl.show({ severity: 'danger', summary: 'Gagal', detail: 'Pilih Pendidikan Dulu'})}}],
    })
  }

  save() {
      this.growl.show({ severity: 'success', summary: 'Success', detail: 'Data Di simpan' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Soal 2 Ujian Front End </h1>
          <p>Amad Hendro</p>
        </header>

        <div className="content-section implementation splitbutton-demo">
          <Growl ref={(el) => { this.growl = el; }}></Growl>
          <div className="ui-g">
              <div className="ui-g-6">
                <SplitButton label="Pendidikan" icon="fa-graduation-cap" onClick={this.save} model={this.items_pendidikan} className="ui-button-primary"></SplitButton>
              </div>
              <div className="ui-g-6">
                <SplitButton label="Tingkatan" icon="fa-user" model={this.state.default_tingkatan} className="ui-button-success"></SplitButton>
              </div>
              
          </div>
        </div>
      </div>
    );
  }
}

export default App;
