import { html } from "lighterhtml";
import settings from "../settings.json";

export const renderFooter = html.node`<footer class="afooter">
  <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <div>
              <input type="hidden" name="cmd" value="_donations" />
              <input type="hidden" name="bn" value="TipsandTricks_SP" />
              <input
                type="hidden"
                name="business"
                value="rockstarrollerderby@gmail.com"
              />
              <input type="hidden" name="rm" value="0" />
              <input type="hidden" name="currency_code" value="USD" />
              <input
                type="image"
                style="cursor: pointer"
                src="https://cdn.glitch.me/089607c7-7361-4d68-88c6-455c670decf8%2Fpp-donate.png?v=1637254704665"
                width="75%"
                name="submit"
                alt="PayPal - The safer, easier way to pay online."
              />
              <img
                alt=""
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </div>
          </form>
</footer>
`;
