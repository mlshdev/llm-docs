> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtaggetvalue](https://developer.apple.com/documentation/coremedia/cmtaggetvalue)

# CMTagGetValue

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Retrieves a tag’s value as an uninterpreted 64-bit wide unsigned integer.

## Declaration

```objectivec
static CMTagValue CMTagGetValue(CMTag tag);
```

## Parameters

- `tag`: The tag to retrieve the value of.

<a id="Discussion"></a>

## Discussion

Prefer using another method from Retrieving Tag Values that automatically interprets a tag to calling this method and performing your own typecast.

## See Also

### Retrieving Tag Values

- [CMTagCopyAsDictionary](cmtagcopyasdictionary.md): Copies an existing tag to a new dictionary object.
- [CMTagGetFlagsValue](cmtaggetflagsvalue.md): Retrieves a tag’s value as a 64-bit field flag.
- [CMTagGetFloat64Value](cmtaggetfloat64value.md): Retrieves a tag’s value as a 64-bit floating point number.
- [CMTagGetOSTypeValue](cmtaggetostypevalue.md): Retrieves a tag’s value for use by the operating system.
- [CMTagGetSInt64Value](cmtaggetsint64value.md): Retrieves a tag’s value as a signed 64-bit integer.
