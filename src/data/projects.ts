// The cards on the page, in order. Descriptions follow each repo's GitHub
// description; leave out forks.
export interface Project {
  name: string;
  description: string;
  language: keyof typeof languages;
  isNew?: boolean;
  site?: { label: string; href: string };
}

// GitHub's linguist colors.
export const languages = {
  Go: "#00add8",
  C: "#555555",
  Shell: "#89e051",
  YAML: "#cb171e",
};

export const projects: Project[] = [
  {
    name: "tokenex",
    description:
      "A Go library that exchanges identity tokens for temporary cloud credentials, with built-in support for AWS, GCP, Azure, OCI, Kubernetes and OAuth2.",
    language: "Go",
    site: { label: "Website", href: "https://riptideslabs.github.io/tokenex/" },
  },
  {
    name: "waterwheel",
    description:
      "Workload identity for Kubernetes: pods call AI and cloud APIs without long-lived API keys. Early preview.",
    language: "Go",
    isNew: true,
    site: { label: "Website", href: "https://riptideslabs.github.io/waterwheel/" },
  },
  {
    name: "keyledger",
    description:
      "A terminal UI to inventory, health-check and track every API key issued across your AI providers.",
    language: "Go",
    site: { label: "Website", href: "https://keyledger.riptides.io/" },
  },
  {
    name: "libsigv4",
    description: "A highly portable AWS SigV4 implementation in C.",
    language: "C",
  },
  {
    name: "oci-req-signer-c",
    description: "A highly portable OCI request signer in C.",
    language: "C",
  },
  {
    name: "wsl2-kernel-headers",
    description:
      "Kernel-devel trees for Microsoft's WSL2 kernels, as container images: the kernel headers WSL2 doesn't ship.",
    language: "Shell",
  },
  {
    name: "lima-templates",
    description:
      "Lima VM templates we use to build and test against specific distro and kernel combinations.",
    language: "YAML",
  },
  {
    name: "core-demo",
    description:
      "A demo of Riptides' core features on one Linux machine: augmentation, mTLS, passthrough and credential injection.",
    language: "Shell",
    site: { label: "Docs", href: "https://docs.riptides.io" },
  },
];
