> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtagmakewithflagsvalue](https://developer.apple.com/documentation/coremedia/cmtagmakewithflagsvalue)

# CMTagMakeWithFlagsValue

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new tag with a given category and a value interpreted as a 64-bit flag field.

## Declaration

```objectivec
extern CMTag CMTagMakeWithFlagsValue(CMTagCategory category, uint64_t flagsForTag);
```

## Parameters

- `category`: The category of the new tag. For available categories, see Tag Category Constants.
- `flagsForTag`: The bitfield to set as the new tag’s value.

<a id="return-value"></a>

## Return Value

A new tag with the assigned category containing flags as its value, or [kCMTagInvalid](kcmtaginvalid.md) if no tag could be created.

## See Also

### Creating Tags

- [CMTagMakeFromDictionary](cmtagmakefromdictionary.md): Create a new tag from a dictionary object.
- [CMTagMakeWithFloat64Value](cmtagmakewithfloat64value.md): Creates a new tag with a given category and a 64-bit floating point value.
- [CMTagMakeWithOSTypeValue](cmtagmakewithostypevalue.md): Creates a new tag with a given category and a 64-bit value for use by the framework.
- [CMTagMakeWithSInt64Value](cmtagmakewithsint64value.md): Creates a new tag with a given category and a 64-bit signed integer.
