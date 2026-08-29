> Release-pinned source for Grafana v13.2.0: [docs/sources/as-code/infrastructure-as-code/ansible/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/as-code/infrastructure-as-code/ansible/_index.md)

# Grafana Ansible collection

The [Grafana Ansible collection](https://docs.ansible.com/ansible/latest/collections/grafana/grafana/) provides configuration management resources for Grafana. You can use it to manage:

- Grafana Cloud stacks
- Dashboards
- Data sources
- Folders
- Alerting contact points
- Notification policies
- API keys

If your resources aren't currently available in the Grafana Ansible collection, you can manage them on Grafana Cloud programmatically by writing Ansible playbooks that use the [Ansible's built-in URI module](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/uri_module.html) to call the [HTTP APIs](https://grafana.com/docs/grafana/latest/developers/http_api/) to manage resources for the Grafana Cloud portal, as well as those within a stack.

## Learn more

Refer to [Create and manage a Grafana Cloud stack using Ansible](https://grafana.com/docs/grafana/v13.2/as-code/infrastructure-as-code/ansible/ansible-cloud-stack/) to learn how to create a Grafana Cloud stack and add a data source and dashboard using [Ansible](https://www.ansible.com/).

To learn more about managing Grafana with Infrastructure as code:

- [Grafana Ansible collection documentation](https://docs.ansible.com/ansible/latest/collections/grafana/grafana/)
- [Ansible playbook best practices](https://docs.ansible.com/ansible/latest/user_guide/playbooks_best_practices.html)
- [Grafana API documentation](https://grafana.com/docs/grafana/latest/developers/http_api/)
- [Grafana Cloud API documentation](https://grafana.com/docs/grafana-cloud/developer-resources/api-reference/)
- [Infrastructure as Code with Terraform](https://grafana.com/docs/grafana/latest/as-code/infrastructure-as-code/terraform/)

## Grafana Agent (deprecated)

The Ansible collection also houses [Grafana Agent role](https://github.com/grafana/grafana-ansible-collection/tree/main/roles/grafana_agent), which is now deprecated.
