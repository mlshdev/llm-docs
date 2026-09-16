> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cktooljs/ckdbresolvedrecord/ancestorrecords

# ancestorRecords

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

The array of record objects that represent the ancestor records.

## Declaration

```
attribute CKDBRecord[]? ancestorRecords;
```

<a id="Discussion"></a>

## Discussion

Ancestor records are previous versions of the record. Each value in this array is a `CKDBRecord` object.
