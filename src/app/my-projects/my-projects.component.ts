import { Component, OnInit, TemplateRef } from '@angular/core';
import { Project } from '../shared/project.model';
import { Role } from '../shared/role.model';
import { Technology } from '../shared/technology.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
})
export class MyProjectsComponent implements OnInit {
  projects: Project[];
  term: any = '';
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    this.initProjects();
    console.log(this.projects);
  }

  showProject(t) {
    this.term = t;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  private initProjects() {
    this.projects = [
      new Project(
        'Achva',
        'http://pkanvi.com/images/achva.jpg',
        'satc',
        'http://new.achva.ac.il/',
        'A Online Study sites for students.',
        'RTL',
        [
          new Role('Convert PSD to HTML'),
          new Role('RTL site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Seo Who',
        'http://pkanvi.com/images/seowho.jpg',
        'satc',
        'http://seowho.co.il/',
        'SeoWho is led by a team of marketing and Internet marketing veteran who founded the company under the principle of providing outstanding online marketing services that deliver real results for our customers. Since our establishment, we are consistently recognized as a leader in our industry by review sites and customers.',
        'RTL',
        [
          new Role('Custom HTML, CSS and jQuery'),
          new Role('RTL site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Olam',
        'http://pkanvi.com/images/olam.jpg',
        'satc',
        'http://www.rolam.co.il/',
        'For over three decades we create experiences Eretz Yisrael invited the participants fascinating trips between the landscapes and the human landscape design it. ',
        'RTL/LTR',
        [
          new Role('Custom HTML, CSS and jQuery'),
          new Role('RTL site and LTR as well. So I wrote both CSS'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Schweppes',
        'http://pkanvi.com/images/schweppes.jpg',
        'satc',
        'http://www.schweppes.co.il/',
        "Schweppes's story begins 230 years ago, somewhere in the late eighteenth century. Johann Jacob Soofh, a visionary, was born in Germany in 1740 and began his career with Swiss jeweler and watchmaker in Geneva, as is customary.",
        'RTL',
        [
          new Role('Custom HTML, CSS and jQuery'),
          new Role('RTL site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Pashut',
        'http://pkanvi.com/images/pashut.jpg',
        'satc',
        'http://pashut-signon.co.il/',
        'Welcome to raid, studio production and import solid wood furniture made to measure and personalized design. Just - a matter of style. We know that everyone has his own style, his own design line, his passions and his dreams. We are here to make the process of turning the dream of a piece of furniture - simple. ',
        'RTL',
        [
          new Role('Custom HTML, CSS and jQuery'),
          new Role('RTL site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Anuvratclinics',
        'http://pkanvi.com/images/anuvratclinics.jpg',
        'eci',
        'http://anuvratclinics.com/',
        'Hospitals & Clinics are just meant to cure the patients. Right? The term Anuvrat itself symbolizes philosophy of change and true to our brand identity our philosophy is equally embedded in integrity and transparency.',
        'LTR',
        [
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Kaizen Part',
        'http://pkanvi.com/images/kaizenpart.jpg',
        'eci',
        'http://www.kaizenpart.com/',
        'Kaizen Parts is an established trading company based in Singapore, has made a remarkable growth since its inception while dealing with Construction, Mining, Oil & Gas and Marine industries. We specialize in the supply of 100% new & genuine / original parts of all reputed makes and brands around the world. We supply CATERPILLAR USA parts, CUMMINS USA parts, Genuine VOLVO, Genuine KOMATSU, Genuine JOHN DEERE,Genuine PERKINSAND Genuine SCANIA spare parts at very competitive prices.',
        'LTR',
        [
          new Role('Create PSD and convert PSD to HTML'),
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-photoshop', 'Photoshop'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Ridge Valley School',
        'http://pkanvi.com/images/ridgevalleyschool.jpg',
        'eci',
        'http://ridgevalleyschool.org/',
        'At Ridge Valley School, we celebrate the exuberance of childhood; and nurture it with great care. Individual attention enables every child to develop holistically across all spheres — be it cerebral, social, emotional, spiritual, or physical development. A Ridge Valley student is curious, well spoken, and socially aware. More importantly, he/she has a need to learn continuously in life, which prepares him/her for the future challenges he/she may come across.',
        'LTR',
        [
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Career View',
        'http://pkanvi.com/images/careerview.jpg',
        'eci',
        'http://careerview.info/',
        'This is a Jobs Portal site',
        'LTR',
        [
          new Role('Create PSD and convert PSD to HTML'),
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-photoshop', 'Photoshop'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Exploitrip',
        'http://pkanvi.com/images/exploitrip.jpg',
        'eci',
        'http://www.exploitrip.com/',
        "You may want to camp, out in the wild at night or sit with your beloved drinking wine in your room's balcony, watching the sun go down. Maybe riding an Elephant into the jungle is your idea of fun or spending an evening on a camel under the stars in a desert is what you love.",
        'LTR',
        [
          new Role('Create PSD and convert PSD to HTML'),
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-photoshop', 'Photoshop'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'MBA Thesis',
        'http://pkanvi.com/images/mbathesis.jpg',
        'excel',
        'http://www.mbathesis.eu/',
        'MBA Thesis is an initiative by patrons who have been academic mentors since over a decade. By launching a dedicated facility for management students, we have ensured that their MBA research is unique and of high quality. Since there are similar research topics considered by management students, they often end up making theses that seem common. Moreover, MBA courses are demanding. Thus, students hardly get enough time for conducting in-depth research and for writing original reports. They sometimes take help from previously done research and online resources, which can lead to plagiarism.',
        'LTR',
        [
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'VMG Company',
        'http://pkanvi.com/images/vmgcompany.jpg',
        'eci',
        'http://www.vmgcompany.co.in/',
        'We are a Delhi based firm of CHARTERED ACCOUNTANTS. We provide all sort of Chartered Accountant services related to Accounting, Auditing & Assurance (including Statutory Audits, Internal Audits and Management Audits), Taxation (Direct and Indirect Tax), Company Law Matters, Consultancy, Conversion of IGAAP Accounts to IFRS and Financial Advisory.',
        'LTR',
        [
          new Role('Changes in HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'TB Master',
        'http://pkanvi.com/images/tbmaster.jpg',
        'excel',
        'http://www.tbmaster.com/',
        'T&B Master Logistics is an NVOCC (Non-Vessel Operating Common Carrier) that specializes in international freight forwarding, automobile transportation, and project cargo shipments. We customize our service according to the specifications of your move, keeping in mind your requirements and your requests.',
        'LTR',
        [
          new Role('Create PSD and convert PSD to HTML'),
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-photoshop', 'Photoshop'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Canada Drives',
        'http://pkanvi.com/images/canadadrives.jpg',
        'eci',
        'https://dealers.canadadrives.ca/',
        'Canada Drives® connects dealerships across the country with tens of thousands of customers searching for auto financing every month.',
        'LTR',
        [
          new Role('Changes in HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Regent Editing',
        'http://pkanvi.com/images/regentediting.jpg',
        'excel',
        'http://www.regentediting.com/',
        'Regent Editing is probably the best academic editing service on the planet. With over 570 PhD editors and proofreaders, company strives to offer language editing, proofreading, formatting and review services.',
        'LTR',
        [
          new Role('Changes in HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-wordpress', 'Wordpress'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Miller Editing Center',
        'http://pkanvi.com/images/millereditingcenter.jpg',
        'excel',
        'http://www.millereditingcenter.com/',
        'Miller Editing Center was set up in the year 2007 when Dr. James Miller formed a team of academic editing professionals. Since our start in 2007, we have successfully edited over 15,000 dissertations and related documents that have been written during the course of higher studies (Master’s and PhD). Members of our editing team are led and trained by Dr. Miller, and they have immense experience in editing and formatting theses and dissertations as per the generally accepted formats and styles.',
        'LTR',
        [
          new Role('Create PSD and convert PSD to HTML'),
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-photoshop', 'Photoshop'),
          new Technology('icon-wordpress', 'Wordpress'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'PHD Assistant',
        'http://pkanvi.com/images/phdassistant.jpg',
        'excel',
        'http://www.phdassistant.com/',
        'Doctoral research projects are tough assignments that tend to overwhelm the researchers who undertake them. But such projects also bring name, fame and accolades to the scholars who complete them successfully. We established this unique platform of PhD Assistant with the grounding objective to help doctoral candidates in such arduous ventures. The melange of services offered by our company encompasses every aspect of research work. And academicians from prestigious universities have been hired to assist and advice students for these services.',
        'LTR',
        [
          new Role('Create PSD and convert PSD to HTML'),
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-photoshop', 'Photoshop'),
          new Technology('icon-wordpress', 'Wordpress'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Scoring High',
        'http://pkanvi.com/images/scoringhigh.jpg',
        'excel',
        'http://www.scoringhigh.co.uk/',
        'Owned and managed by the parent company Element K, Scoring High is our premiere venture in the field of research consultancy. Monika Richins, PhD, is the founder of our company and can be reached at info@scoringhigh.co.uk . She is assisted by four administrative staff members at our office.',
        'LTR',
        [
          new Role('Changes in HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-photoshop', 'Photoshop'),
          new Technology('icon-wordpress', 'Wordpress'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Editing Market',
        'http://pkanvi.com/images/editingmarket.jpg',
        'excel',
        'http://www.editingmarket.com/',
        'Simply Select a service, Add to Compare and Place your Order',
        'LTR',
        [
          new Role('Create PSD and convert PSD to HTML'),
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-photoshop', 'Photoshop'),
          new Technology('icon-wordpress', 'Wordpress'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Regent Editing',
        'http://pkanvi.com/images/regentediting.ae.jpg',
        'excel',
        'http://www.regentediting.ae/',
        'Regent Editing is probably the best academic editing service on the planet. With over 570 PhD editors and proofreaders, company strives to offer language editing, proofreading, formatting and review services.',
        'LTR',
        [
          new Role('Create PSD and convert PSD to Wordpress'),
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-photoshop', 'Photoshop'),
          new Technology('icon-wordpress', 'Wordpress'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Regent Editing',
        'http://pkanvi.com/images/regentediting.cn.jpg',
        'excel',
        'http://regentediting.cn/',
        'Regent Editing is probably the best academic editing service on the planet. With over 570 PhD editors and proofreaders, company strives to offer language editing, proofreading, formatting and review services.',
        'LTR',
        [
          new Role('Create PSD and convert PSD to Wordpress'),
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-photoshop', 'Photoshop'),
          new Technology('icon-wordpress', 'Wordpress'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Regent Editing',
        'http://pkanvi.com/images/regentediting.co.za.jpg',
        'excel',
        'http://www.regentediting.co.za/',
        'Regent Editing is probably the best academic editing service on the planet. With over 570 PhD editors and proofreaders, company strives to offer language editing, proofreading, formatting and review services.',
        'LTR',
        [
          new Role('Create PSD and convert PSD to Wordpress'),
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-photoshop', 'Photoshop'),
          new Technology('icon-wordpress', 'Wordpress'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Regent Editing',
        'http://pkanvi.com/images/regentediting.de.jpg',
        'excel',
        'http://www.regentediting.de/',
        'Regent Editing is probably the best academic editing service on the planet. With over 570 PhD editors and proofreaders, company strives to offer language editing, proofreading, formatting and review services.',
        'LTR',
        [
          new Role('Create PSD and convert PSD to Wordpress'),
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-photoshop', 'Photoshop'),
          new Technology('icon-wordpress', 'Wordpress'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Regent Editing',
        'http://pkanvi.com/images/regentediting.in.jpg',
        'excel',
        'http://www.regentediting.in/',
        'Regent Editing is probably the best academic editing service on the planet. With over 570 PhD editors and proofreaders, company strives to offer language editing, proofreading, formatting and review services.',
        'LTR',
        [
          new Role('Create PSD and convert PSD to Wordpress'),
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-photoshop', 'Photoshop'),
          new Technology('icon-wordpress', 'Wordpress'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Regent Editing',
        'http://pkanvi.com/images/regentediting.kr.jpg',
        'excel',
        'http://www.regentediting.kr/',
        'Regent Editing is probably the best academic editing service on the planet. With over 570 PhD editors and proofreaders, company strives to offer language editing, proofreading, formatting and review services.',
        'LTR',
        [
          new Role('Create PSD and convert PSD to Wordpress'),
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-photoshop', 'Photoshop'),
          new Technology('icon-wordpress', 'Wordpress'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Editor Pages',
        'http://pkanvi.com/images/editorpages.jpg',
        'excel',
        'http://www.editorpages.com/',
        'Hire our service to your proposal or dissertation. We guarantee removal of all language errors and compliance with formatting or your money back.',
        'LTR',
        [
          new Role('Changes in HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-wordpress', 'Wordpress'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'APA6ED',
        'http://pkanvi.com/images/apa6ed.jpg',
        'excel',
        'http://apa6ed.com/',
        'APA or American Psychological Association style is the most commonly used citation and APA 6th edition formatting style guide used by scholars. It is used for social science, humanities, education research, and more. ',
        'LTR',
        [
          new Role('Changes in HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-wordpress', 'Wordpress'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Chanakya Research',
        'http://pkanvi.com/images/chanakya-research.jpg',
        'excel',
        'http://www.chanakya-research.com/',
        'Chanakya Research(CR), a division of M/s ELK Education Consultants Pvt. Ltd. is a specialized wing of the ELK group with business interests in genuine research support services. With a perspective to visualize itself as a leading research support organization across the world, it offers a plethora of services across all academic levels.',
        'LTR',
        [
          new Role('Changes in HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-wordpress', 'Wordpress'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Nora Consulting',
        'http://pkanvi.com/images/noraconsulting.jpg',
        'excel',
        'http://noraconsulting.nl/',
        'Nora Consulting is an effort by a team of academic consultants in Netherlands aimed at helping research scholars prepare the best projects that add to the knowledge repertoire in that specific field. The consultants associated with the company guide students in an interactive manner and ensure that all queries are solved promptly. ',
        'LTR',
        [
          new Role('Create PSD and convert PSD to Wordpress'),
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-photoshop', 'Photoshop'),
          new Technology('icon-wordpress', 'Wordpress'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Zebra Paper Towels',
        'http://pkanvi.com/images/zebrapapertowels.jpg',
        'excel',
        'http://www.zebrapapertowels.com/',
        'Glen Mullins, inventor of Just My Color Decorative Paper Towels, is on a mission to revolutionize the way paper towels look in your home. Welcome these new bold, bright colors, and patterns. Her popular Zebra Paper Towel, designed by artist Cherish Flieder, is the first in line for production. Sign up to find out how you can get these paper towels in your hands.',
        'LTR',
        [
          new Role('Create PSD and convert PSD to Wordpress'),
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-photoshop', 'Photoshop'),
          new Technology('icon-wordpress', 'Wordpress'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Revive Dissertation',
        'http://pkanvi.com/images/revivedissertation.jpg',
        'excel',
        'http://www.revivedissertation.sg/',
        "Revive Dissertation is a firm dedicated to providing trustworthy assistance to academic researchers and students pursuing Master's and PhD courses in Singapore. Looking at the students’ need for specialised guidance, we have started offering a variety of research support services to them. The company is currently involved in providing dissertation and thesis help to all students, as well as assignment and essay writing assistance for Masters-level students. Apart from this, Revive Dissertation takes care of the research documents review and statistical data analysis requirements of research scholars.",
        'LTR',
        [
          new Role('Create PSD and convert PSD to Wordpress'),
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-photoshop', 'Photoshop'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Edit n Publish',
        'http://pkanvi.com/images/editnpublish.jpg',
        'excel',
        'http://www.editnpublish.com/',
        'Our English editing services extend to both research scholars, as well as journal publishers. We offer affordable prices for dissertation editing services, thesis editing services, proofreading and peer review services. These are complemented by other services like journal recommendation, layout formatting and graphic designing for assistance with manuscript publications.',
        'LTR',
        [
          new Role('Changes in HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-wordpress', 'Wordpress'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
      new Project(
        'Plagiarism Removal',
        'http://pkanvi.com/images/plagiarismremoval.jpg',
        'excel',
        'http://www.plagiarismremoval.in/',
        'As the name suggests, Plagiarism Removal is a firm that assures research students of the originality of their content. We support students and research professionals in detecting and removing all types of plagiarism in their theses, dissertations, and research papers. While we take care of plagiarism happening due to incorrect citation or referencing and by misquoting original work of other authors, we also check and remove plagiarism that happens accidentally, without a student’s intention of copying anything',
        'LTR',
        [
          new Role('Create PSD and convert PSD to Wordpress'),
          new Role('Made in my custom HTML and CSS'),
          new Role('LTR site.'),
          new Role('Google page speed.'),
          new Role('SEO Friendly HTML and Follow W3C standards.'),
          new Role(
            'Responsible for cross browser template development using HTML and CSS.'
          ),
        ],
        [
          new Technology('icon-photoshop', 'Photoshop'),
          new Technology('icon-html5', 'HTML5'),
          new Technology('icon-css3', 'CSS3'),
          new Technology('icon-jquery', 'jQuery'),
        ]
      ),
    ];
  }
}
