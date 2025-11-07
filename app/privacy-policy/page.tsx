import { LegalPageLayout } from "../legal-page-layout";

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="October 2025">
      <div className="space-y-6 sm:space-y-8">
        {/* Intro */}
        <section className="space-y-3 rounded-lg bg-card p-4 sm:p-6">
          <p className="text-sm sm:text-base leading-relaxed font-medium">
            TrueDrop is a wellbeing app created by Brand Comms Africa (Pty) Ltd,
            a company registered in the Republic of South Africa (Reg. No.
            2021/516959/07).
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            This Privacy Policy explains how we collect, use, and protect your
            personal information when you use the TrueDrop app and related
            services.
          </p>
        </section>

        {/* Section 1 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              1.
            </div>
            <div className="flex-1 min-w-0 space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Information We Collect
              </h2>
              <p className="leading-relaxed text-xs sm:text-sm text-muted-foreground">
                We collect limited personal information to improve your
                experience:
              </p>
              <ul className="space-y-2 pl-4 sm:pl-5 list-disc text-xs sm:text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">
                    Account details:
                  </span>{" "}
                  name, email, and login credentials.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    App activity:
                  </span>{" "}
                  sobriety check-ins, journal entries, and coping tool
                  selections (stored privately).
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Technical data:
                  </span>{" "}
                  device type, app version, and general usage analytics.
                </li>
              </ul>
              <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-3 sm:p-4 dark:border-blue-900 dark:bg-blue-950">
                <p className="text-xs sm:text-sm text-blue-900 dark:text-blue-100">
                  ℹ️ We do not collect sensitive financial or health data beyond
                  what you voluntarily record in the app (e.g., sobriety wallet
                  or journal notes).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              2.
            </div>
            <div className="flex-1 min-w-0 space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                How We Use Your Information
              </h2>
              <p className="leading-relaxed text-xs sm:text-sm text-muted-foreground">
                Your data helps us:
              </p>
              <ul className="space-y-2 pl-4 sm:pl-5 list-disc text-xs sm:text-sm text-muted-foreground">
                <li>Track progress and generate motivational feedback.</li>
                <li>Personalize your experience and AI insights.</li>
                <li>Maintain account functionality and app security.</li>
                <li>
                  Improve features and user experience through aggregated,
                  anonymous analytics.
                </li>
              </ul>
              <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-3 sm:p-4 dark:border-green-900 dark:bg-green-950">
                <p className="text-xs sm:text-sm font-medium text-green-900 dark:text-green-100">
                  ✓ We will never sell, trade, or share your data with third
                  parties without your explicit consent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              3.
            </div>
            <div className="flex-1 min-w-0 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Data Storage and Security
              </h2>
              <p className="leading-relaxed text-xs sm:text-sm text-muted-foreground">
                All personal information is stored securely using encrypted
                servers and authenticated access. TrueDrop complies with South
                Africa's Protection of Personal Information Act (POPIA) and
                similar international privacy standards.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              4
            </div>
            <div className="flex-1 min-w-0 space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Your Control
              </h2>
              <p className="leading-relaxed text-xs sm:text-sm text-muted-foreground">
                You have full control over your data and can:
              </p>
              <ul className="space-y-2 pl-4 sm:pl-5 list-disc text-xs sm:text-sm text-muted-foreground">
                <li>
                  Edit or delete your data at any time in the app settings.
                </li>
                <li>
                  Request account deletion, which permanently removes all
                  personal data.
                </li>
                <li>
                  Withdraw consent for data processing by discontinuing app use.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              5
            </div>
            <div className="flex-1 min-w-0 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Third-Party Services
              </h2>
              <p className="leading-relaxed text-xs sm:text-sm text-muted-foreground">
                Payments are processed securely through Payfast, which maintains
                its own privacy and security compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              6
            </div>
            <div className="flex-1 min-w-0 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Updates
              </h2>
              <p className="leading-relaxed text-xs sm:text-sm text-muted-foreground">
                We may update this Privacy Policy occasionally. The latest
                version will always be available within the app. Continued use
                of TrueDrop means you accept the current policy.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              7
            </div>
            <div className="flex-1 min-w-0 space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Contact Us
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                For privacy-related questions, please contact:
              </p>
              <div className="space-y-1 rounded-lg bg-card p-3 sm:p-4 border border-border">
                <p className="text-xs sm:text-sm font-medium text-foreground">
                  📧 privacy@truedrop.app
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
}
