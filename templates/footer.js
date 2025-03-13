import { html } from "lighterhtml";
import settings from "../settings.json";

export const renderFooter = html.node`<footer class="afooter">
  
  <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
    <div class="paypal-donations">
        <input type="hidden" name="cmd" value="_donations">
        <input type="hidden" name="bn" value="TipsandTricks_SP">
        <input type="hidden" name="business" value="rockstarrollerderby@gmail.com">
        <input type="hidden" name="rm" value="0">
        <input type="hidden" name="currency_code" value="USD">
        <input type="image" style="cursor: pointer;width:100%;max-width:408px;" src="https://rockstarrollerderby.com/wp-content/uploads/2017/07/pp-donate.png" name="submit" alt="PayPal - The safer, easier way to pay online.">
        <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
    </div>
</form>

</footer>
`;
