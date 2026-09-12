> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspresentationintent/ordinal](https://developer.apple.com/documentation/foundation/nspresentationintent/ordinal)

# ordinal

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The number for an item in an ordered list.

## Declaration

```objectivec
@property (readonly) NSInteger ordinal;
```

<a id="Discussion"></a>

## Discussion

If the intent is not a list, the value of this property is `0`.

## See Also

### Getting list information

- [indentationLevel](indentationlevel.md): The indentation level of the intent.
