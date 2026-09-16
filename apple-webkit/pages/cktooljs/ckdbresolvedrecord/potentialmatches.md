> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cktooljs/ckdbresolvedrecord/potentialmatches

# potentialMatches

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

An array of potential participants that the user can choose from.

## Declaration

```
attribute CKDBSharePotentialParticipant[]? potentialMatches;
```

<a id="Discussion"></a>

## Discussion

This array only contains values if the participant is not identifiable. If this array is populated, each value is a `CKDBSharePotentialParticipant` object.
