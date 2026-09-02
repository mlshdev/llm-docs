> Commit-pinned source for n8n main: [docs/build/manage-workflows/tag-workflows.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/build/manage-workflows/tag-workflows.md)

# Tags <a id="tags"></a>

Workflow tags allow you to label your workflows. You can then filter workflows by tag.

Tags are global. This means when you create a tag, it's available to all users on your n8n instance.

## Add a tag to a workflow <a id="add-a-tag-to-a-workflow"></a>

To add a tag to your workflow:

1. In your workflow, select **+ Add tag**.
2. Select an existing tag, or enter a new tag name.
3. Once you select a tag and click away from the tag modal, n8n displays the tag next to the workflow name.

You can add more than one tag.

## Filter by tag <a id="filter-by-tag"></a>

When browsing the workflows on your instance, you can filter by tag.

1. On the **Workflows** page, select **Filters**.
2. Select **Tags**.
3. Select the tag or tags you want to filter by. n8n lists the workflows with that tag.

## Manage tags <a id="manage-tags"></a>

You can edit existing tags. Instance owners can delete tags.

1. Select **Manage tags**. This is available from **Filters** > **Tags** on the **Workflows** page, or in the **+ Add tag** modal in your workflow.
2. Hover over the tag you want to change.
3. Select **Edit** ![Add node icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/1db58de3a8d474a1ba99f5a612beac694402d963/docs/build/.gitbook/assets/edit.png) to rename it, or **Delete** ![Add node icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/1db58de3a8d474a1ba99f5a612beac694402d963/docs/build/.gitbook/assets/delete.png) to delete it.

> **Warning**
> **Global tags**
>
> Tags are global. If you edit or delete a tag, this affects all users of your n8n instance.

## Related resources <a id="related-resources"></a>

- [Favorite items](https://docs.n8n.io/build/manage-workflows/favorite-items): Pin workflows, folders, projects, and data tables for quick access.
