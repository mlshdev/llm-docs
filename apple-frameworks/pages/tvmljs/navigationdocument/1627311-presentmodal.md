> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvmljs/navigationdocument/1627311-presentmodal

# presentModal

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Displays the passed document on top of the current document.

## Declaration

```
void presentModal(
    in Document document
);
```

## Parameters

- `document`: A DOM document created by parsing a TVML file.

<a id="discussion"></a>

## Discussion

The passed document is presented on top of the current document. The current document is blurred and is used as the background for the modal document.

## See Also

### Overlaying Document

- [dismissModal](1627446-dismissmodal.md): Dismisses the document displayed in modal view.
