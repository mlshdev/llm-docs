> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.subscription/fireson](https://developer.apple.com/documentation/cloudkitjs/cloudkit.subscription/fireson)

# firesOn

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

An array of keywords that specify the actions that should trigger push notifications. Possible values in the array are: `"create"`, `"update"`, and `"delete"`. This key is not used if `query` is null.

## Declaration

```
attribute String[] firesOn;
```
