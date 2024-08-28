import { Plan, PlanDetail } from "@/types/Plan";

export const PLANS: Plan[] = [
  {
    title: "Basic",
    price: { monthly: 0, yearly: 0 },
    detail: {
      numProject: "1",
      numForm: "3",
      numTeamMember: "0",
      numSubmission: "100",
      sizeStorage: "100MB",
      numFieldsForForm: "10 Fields",

      customBranding: false,
      customSubDomain: false,
      customeFieldRegex: false,
      serviceLevelAgreement: false,
      LDAPAuth: false,
      emailOTPAuth: true,
      geoLocationAuth: false,
      publicIpAuth: true,
      whatsAppAuth: true,
      smsAuth: false,
      apiIntegration: false,
      webhookIntegration: false,
      googleAnalyticsIntegration: false,
      smtpIntegration: false,
      paymentIntegration: false,
      lang_arabic_english: true,
      exportExcelPDF: true,
      askAI: true,
      aiAsssist: false,
    },
  },
  {
    title: "Business",
    price: { monthly: 120, yearly: 1224 },
    detail: {
      numProject: "3",
      numForm: "15",
      numTeamMember: "3",
      numSubmission: "20000",
      sizeStorage: "10GB",
      numFieldsForForm: "100 Fields",

      customBranding: true,
      customSubDomain: true,
      customeFieldRegex: true,
      serviceLevelAgreement: true,
      LDAPAuth: true,
      emailOTPAuth: true,
      geoLocationAuth: true,
      publicIpAuth: true,
      whatsAppAuth: true,
      smsAuth: true,
      apiIntegration: true,
      webhookIntegration: true,
      googleAnalyticsIntegration: true,
      smtpIntegration: true,
      paymentIntegration: true,
      lang_arabic_english: true,
      exportExcelPDF: true,
      askAI: true,
      aiAsssist: true,
    },
  },
];
