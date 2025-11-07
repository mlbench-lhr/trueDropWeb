import { LegalPageLayout } from "../legal-page-layout";

export default function TermsAndConditions() {
  return (
    <LegalPageLayout title="Terms and Conditions" lastUpdated="October 2025">
      <div className="space-y-6 sm:space-y-8">
        {/* Intro */}
        <section className="space-y-3 rounded-lg bg-card p-4 sm:p-6">
          <p className="text-sm sm:text-base leading-relaxed">
            Welcome to TrueDrop, a digital wellbeing platform designed to make
            sobriety simple.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            TrueDrop is a product of Brand Comms Africa (Pty) Ltd, a company
            registered in the Republic of South Africa (Registration Number:
            2021/516959/07).
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            By downloading, installing, or using TrueDrop, you agree to the
            following Terms and Conditions (&quot;Terms&quot;). Please read them
            carefully before using the app.
          </p>
        </section>

        {/* Section 1 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              1.
            </div>
            <div className="flex-1 min-w-0 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Acceptance of Terms
              </h2>
              <p className="leading-relaxed text-xs sm:text-sm text-muted-foreground">
                By creating an account or using TrueDrop, you agree to these
                Terms and our Privacy Policy. You must be 18 years or older to
                use the app. If you do not agree with any part of these Terms,
                please stop using the app immediately.
              </p>
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
                About TrueDrop
              </h2>
              <p className="leading-relaxed text-xs sm:text-sm text-muted-foreground">
                TrueDrop helps individuals track sobriety, manage triggers, and
                stay connected through supportive, private micro-communities.
                The app includes:
              </p>
              <ul className="space-y-2 pl-4 sm:pl-5 list-disc text-xs sm:text-sm text-muted-foreground">
                <li>
                  <span className="font-medium">Sobriety Progress Tracker</span>{" "}
                  with daily check-ins and motivational messages.
                </li>
                <li>
                  <span className="font-medium">Micro-Community Pods</span> (up
                  to 5 people) for peer support and encouragement.
                </li>
                <li>
                  <span className="font-medium">Personal Journal</span> for
                  reflections and emotional tracking.
                </li>
                <li>
                  <span className="font-medium">Coping Toolbox</span> for
                  personalized coping strategies, with AI suggestions.
                </li>
                <li>
                  <span className="font-medium">Sobriety Wallet</span> to
                  visualize savings from reduced alcohol spending.
                </li>
              </ul>
              <div className="mt-4 rounded-lg border border-orange-200 bg-orange-50 p-3 sm:p-4 dark:border-orange-900 dark:bg-orange-950">
                <p className="text-xs sm:text-sm font-medium text-orange-900 dark:text-orange-100">
                  ⚠️ Important: TrueDrop is a self-management tool, not a
                  substitute for therapy, counseling, or medical treatment.
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
                Your Account
              </h2>
              <ul className="space-y-2 pl-4 sm:pl-5 list-disc text-xs sm:text-sm text-muted-foreground">
                <li>
                  Users must register using a valid email or Google account and
                  verify their email to activate their profile.
                </li>
                <li>
                  Keep your login information private; you are responsible for
                  all activity under your account.
                </li>
                <li>
                  You agree to provide accurate information and update it as
                  needed.
                </li>
                <li>
                  We reserve the right to suspend or close accounts that breach
                  these Terms or misuse app features.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              4.
            </div>
            <div className="flex-1 min-w-0 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Privacy and Data
              </h2>
              <p className="leading-relaxed text-xs sm:text-sm text-muted-foreground">
                We value your privacy. TrueDrop follows strict data protection
                standards in line with South African POPIA regulations. Your
                journal entries, pod chats, and personal data remain private and
                are not shared with third parties without consent. For more
                details on how your data is stored and processed, please see our
                Privacy Policy within the app.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              5.
            </div>
            <div className="flex-1 min-w-0 space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Community Pods
              </h2>
              <p className="leading-relaxed text-xs sm:text-sm text-muted-foreground">
                TrueDrop offers Micro-Community Pods — private groups of up to 5
                members for mutual encouragement. By using Pods, you agree to:
              </p>
              <ul className="space-y-2 pl-4 sm:pl-5 list-disc text-xs sm:text-sm text-muted-foreground">
                <li>Respect others and communicate kindly.</li>
                <li>Keep all discussions confidential.</li>
                <li>Avoid sharing promotional or harmful content.</li>
                <li>Follow the app's Pod Communication Policy.</li>
              </ul>
              <p className="mt-4 text-xs sm:text-sm font-medium text-foreground">
                Each user can:
              </p>
              <ul className="space-y-2 pl-4 sm:pl-5 list-disc text-xs sm:text-sm text-muted-foreground">
                <li>Create up to 3 pods and join up to 5 pods.</li>
                <li>Leave a pod at any time.</li>
                <li>Delete a pod only after 24 hours (creators only).</li>
                <li>
                  If a user receives three or more verified conduct strikes,
                  their activity in Pods will be suspended for 7 days.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              6.
            </div>
            <div className="flex-1 min-w-0 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Journaling and AI Guidance
              </h2>
              <ul className="space-y-2 pl-4 sm:pl-5 list-disc text-xs sm:text-sm text-muted-foreground">
                <li>Your journal is private and accessible only to you.</li>
                <li>
                  AI-generated reflections, check-ins, and suggestions are based
                  on your entries and behavior patterns.
                </li>
                <li>
                  AI outputs are intended as motivational and reflective prompts
                  — not clinical or therapeutic advice.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              7.
            </div>
            <div className="flex-1 min-w-0 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Sobriety Wallet
              </h2>
              <p className="leading-relaxed text-xs sm:text-sm text-muted-foreground">
                The Sobriety Wallet helps you visualize financial progress by
                tracking what you save through reduced alcohol spending. You can
                enter personal budget data voluntarily. This data remains
                private and is not linked to external financial accounts.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              8.
            </div>
            <div className="flex-1 min-w-0 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Payments and Billing
              </h2>
              <p className="leading-relaxed text-xs sm:text-sm text-muted-foreground">
                TrueDrop offers a 3-day free trial, after which users may
                upgrade to a monthly plan or a discounted yearly plan, processed
                securely through PayFast. By subscribing, you agree to the
                applicable fees and billing cycles. Subscriptions automatically
                renew unless canceled before the next billing date.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              9.
            </div>
            <div className="flex-1 min-w-0 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Intellectual Property
              </h2>
              <p className="leading-relaxed text-xs sm:text-sm text-muted-foreground">
                All app content — including text, design, features, and branding
                — is owned by Brand Comms Africa (Pty) Ltd. You may not
                reproduce, copy, or modify any part of TrueDrop without written
                permission.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              10.
            </div>
            <div className="flex-1 min-w-0 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Limitation of Liability
              </h2>
              <p className="leading-relaxed text-xs sm:text-sm text-muted-foreground">
                TrueDrop is provided &quot;as-is&quot; and
                &quot;as-available.&quot; While we aim to ensure accuracy and
                reliability, Brand Comms Africa (Pty) Ltd is not responsible
                for:
              </p>
              <ul className="space-y-2 pl-4 sm:pl-5 list-disc text-xs sm:text-sm text-muted-foreground">
                <li>Technical errors or downtime.</li>
                <li>Data loss or unauthorized access beyond our control.</li>
                <li>
                  Any indirect or consequential loss arising from app use.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 11 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              11.
            </div>
            <div className="flex-1 min-w-0 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Termination
              </h2>
              <p className="leading-relaxed text-xs sm:text-sm text-muted-foreground">
                We reserve the right to suspend or terminate access if you
                breach these Terms or misuse app features. You may delete your
                account at any time in the app settings.
              </p>
            </div>
          </div>
        </section>

        {/* Section 12 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              12.
            </div>
            <div className="flex-1 min-w-0 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Updates and Modifications
              </h2>
              <p className="leading-relaxed text-xs sm:text-sm text-muted-foreground">
                We may update app features or these Terms periodically.
                Continued use after updates constitutes acceptance of the
                revised Terms. You will always find the most current version
                within the app.
              </p>
            </div>
          </div>
        </section>

        {/* Section 13 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              13.
            </div>
            <div className="flex-1 min-w-0 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Governing Law
              </h2>
              <p className="leading-relaxed text-xs sm:text-sm text-muted-foreground">
                These Terms are governed by the laws of the Republic of South
                Africa. Any disputes shall be resolved in accordance with South
                African jurisdiction.
              </p>
            </div>
          </div>
        </section>

        {/* Section 14 */}
        <section className="space-y-4">
          <div className="flex items-start gap-2 sm:gap-4">
            <div className="text-lg sm:text-xl font-semibold text-foreground">
              14.
            </div>
            <div className="flex-1 min-w-0 space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Contact Us
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                For questions, feedback, or support, please contact:
              </p>
              <div className="space-y-1 rounded-lg bg-card p-3 sm:p-4 border border-border">
                <p className="text-xs sm:text-sm font-medium text-foreground">
                  📧 support@truedrop.app
                </p>
                <p className="text-xs sm:text-sm font-medium text-foreground">
                  🏢 Brand Comms Africa (Pty) Ltd
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
}
