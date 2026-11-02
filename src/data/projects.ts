// The cards on the page, in order. Descriptions follow each repo's GitHub
// description; leave out forks.
export interface Project {
  name: string;
  description: string;
  language: keyof typeof languages;
  icon: "exchange" | "wheel" | "key" | "sign" | "box" | "terminal" | "play";
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
    icon: "exchange",
  },
  {
    name: "waterwheel",
    description:
      "Workload identity for Kubernetes: pods call AI and cloud APIs with short-lived tokens, and never hold a key.",
    language: "Go",
    icon: "wheel",
    site: { label: "Website", href: "https://riptideslabs.github.io/waterwheel/" },
  },
  {
    name: "keyledger",
    description:
      "A terminal UI to inventory, health-check and track every API key issued across your AI providers.",
    language: "Go",
    icon: "key",
    site: { label: "Website", href: "https://keyledger.riptides.io/" },
  },
  {
    name: "libsigv4",
    description: "A highly portable AWS SigV4 implementation in C.",
    language: "C",
    icon: "sign",
  },
  {
    name: "oci-req-signer-c",
    description: "A highly portable OCI request signer in C.",
    language: "C",
    icon: "sign",
  },
  {
    name: "wsl2-kernel-headers",
    description:
      "Kernel-devel trees for Microsoft's WSL2 kernels, as container images: the kernel headers WSL2 doesn't ship.",
    language: "Shell",
    icon: "box",
  },
  {
    name: "lima-templates",
    description:
      "Lima VM templates we use to build and test against specific distro and kernel combinations.",
    language: "YAML",
    icon: "terminal",
  },
  {
    name: "core-demo",
    description:
      "A demo of Riptides' core features on one Linux machine: augmentation, mTLS, passthrough and credential injection.",
    language: "Shell",
    icon: "play",
    site: { label: "Docs", href: "https://docs.riptides.io" },
  },
];
