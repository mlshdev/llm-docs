> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspresentationintent/indentationlevel](https://developer.apple.com/documentation/foundation/nspresentationintent/indentationlevel)

# indentationLevel

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The indentation level of the intent.

## Declaration

```objectivec
@property (readonly) NSInteger indentationLevel;
```

<a id="Discussion"></a>

## Discussion

The initial list has an indentation level of `0`. Each time you nest a new list, the indentation level for new list increases by `1`. All elements within the same list have the same indentation level.

## See Also

### Getting list information

- [ordinal](ordinal.md): The number for an item in an ordered list.
