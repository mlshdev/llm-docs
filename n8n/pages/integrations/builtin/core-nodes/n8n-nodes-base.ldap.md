> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.ldap.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/core-nodes/n8n-nodes-base.ldap.md)

# LDAP <a id="ldap"></a>

This node allows you to interact with your LDAP servers to create, find, and update objects.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/ldap).

## Operations <a id="operations"></a>

- [**Compare**](#compare) an attribute
- [**Create**](#create) a new entry
- [**Delete**](#delete) an entry
- [**Rename**](#rename) the DN of an existing entry
- [**Search**](#search) LDAP
- [**Update**](#update) attributes

Refer to the sections below for details on configuring the node for each operation.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Compare <a id="compare"></a>

Configure this operation using these parameters:

- **Credential to connect with**: Select or create an [LDAP credential](https://docs.n8n.io/integrations/builtin/credentials/ldap) to connect with.
- **DN**: Enter the Distinguished Name (DN) of the entry to compare.
- **Attribute ID**: Enter the ID of the attribute to compare.
- **Value**: Enter the value to compare.

## Create <a id="create"></a>

Configure this operation using these parameters:

- **Credential to connect with**: Select or create an [LDAP credential](https://docs.n8n.io/integrations/builtin/credentials/ldap) to connect with.
- **DN**: Enter the Distinguished Name (DN) of the entry to create.
- **Attributes**: Add the **Attribute ID**/**Value** pairs you'd like to create.

## Delete <a id="delete"></a>

Configure this operation using these parameters:

- **Credential to connect with**: Select or create an [LDAP credential](https://docs.n8n.io/integrations/builtin/credentials/ldap) to connect with.
- **DN**: Enter the Distinguished Name (DN) of the entry to be deleted.

## Rename <a id="rename"></a>

Configure this operation using these parameters:

- **Credential to connect with**: Select or create an [LDAP credential](https://docs.n8n.io/integrations/builtin/credentials/ldap) to connect with.
- **DN**: Enter the current Distinguished Name (DN) of the entry to rename.
- **New DN**: Enter the new Distinguished Name (DN) for the entry in this field.

## Search <a id="search"></a>

Configure this operation using these parameters:

- **Credential to connect with**: Select or create an [LDAP credential](https://docs.n8n.io/integrations/builtin/credentials/ldap) to connect with.
- **Base DN**: Enter the Distinguished Name (DN) of the subtree to search in.
- **Search For**: Select the directory object class to search for.
- **Attribute**: Select the attribute to search for.
- **Search Text**: Enter the text to search for. Use `*` for a wildcard.
- **Return All**: When turned on, the node will return all results. When turned off, the node will return results up to the set **Limit**.
- **Limit**: Only available when you turn off **Return All**. Enter the maximum number of results to return.

### Search options <a id="search-options"></a>

You can also configure this operation using these options:

- **Attribute Names or IDs**: Enter a comma-separated list of attributes to return. Choose from the list or specify IDs using an expression.
- **Page Size**: Enter the maximum number of results to request at one time. Set to 0 to disable paging.
- **Scopes**: The set of entries at or below the **Base DN** to search for potential matches. Select from:
  - **Base Tree**: Often referred to as subordinateSubtree or just "subordinates," selecting this option will search the subordinates of the **Base DN** entry but not the **Base DN** entry itself.
  - **Single Level**: Often referred to as "one," selecting this option will search only the immediate children of the **Base DN** entry.
  - **Whole Subtree**: Often referred to as "sub," selecting this option will search the **Base DN** entry and all its subordinates to any depth.

Refer to [The LDAP Search Operation](https://ldap.com/the-ldap-search-operation/) for more information on search scopes.

## Update <a id="update"></a>

Configure this operation using these parameters:

- **Credential to connect with**: Select or create an [LDAP credential](https://docs.n8n.io/integrations/builtin/credentials/ldap) to connect with.
- **DN**: Enter the Distinguished Name (DN) of the entry to update.
- \***Update Attributes**: Select whether to **Add** new, **Remove** existing, or **Replace** existing attribute.
- Then enter the **Attribute ID**/**Value** pair you'd like to update.

## Templates and examples <a id="templates-and-examples"></a>

[Browse LDAP integration templates](https://n8n.io/integrations/ldap) or [search all templates](https://n8n.io/workflows/)
