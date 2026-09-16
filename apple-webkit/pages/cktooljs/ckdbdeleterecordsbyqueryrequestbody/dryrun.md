> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cktooljs/ckdbdeleterecordsbyqueryrequestbody/dryrun

# dryRun

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

A Boolean value that indicates whether to delete matching records.

## Declaration

```
attribute boolean? dryRun;
```

<a id="Discussion"></a>

## Discussion

If `dryRun` is set to `true`, the server won’t delete records.
