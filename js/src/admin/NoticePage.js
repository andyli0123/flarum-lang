import ExtensionPage from 'flarum/admin/components/ExtensionPage'
import Link from 'flarum/common/components/Link';

export default class NoticePage extends ExtensionPage {
    content(){
        console.log('[ app.routes ] >', app.routes)
        return (
            <div className="ChineseNoticePage">
                <div className="Form-group">
                    <label><i class="fas fa-info-circle"></i> 提示</label>
                    <p>您已開啟中文語言包，如需使用中文作為 Flarum 的預設語言，請前往<Link href={app.route('basics')}>「常規」</Link>頁面設定。</p>
                </div>
            </div>
        )
    }
}
