> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/valuetypenotrecognizederror/discriminator](https://developer.apple.com/documentation/cktooljs/valuetypenotrecognizederror/discriminator)

# discriminator

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

The object’s type identifier.

## Declaration

```
attribute string discriminator;
```

<a id="Discussion"></a>

## Discussion

For an object that’s part of a hierarchy, an object deserializer uses a discriminator value to determine what the JSON should be deserialized as. The deserializer function emits this error if the discriminator is unrecognized.
