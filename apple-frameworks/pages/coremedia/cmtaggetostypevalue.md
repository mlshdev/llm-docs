> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtaggetostypevalue](https://developer.apple.com/documentation/coremedia/cmtaggetostypevalue)

# CMTagGetOSTypeValue

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Retrieves a tag’s value for use by the operating system.

## Declaration

```objectivec
extern OSType CMTagGetOSTypeValue(CMTag tag);
```

## Parameters

- `tag`: The tag to get the value from.

<a id="Discussion"></a>

## Discussion

> **Note**

>  Before retrieving a tag’s value with this function, call [CMTagHasOSTypeValue](cmtaghasostypevalue.md) to ensure it has the correct type.

## See Also

### Retrieving Tag Values

- [CMTagCopyAsDictionary](cmtagcopyasdictionary.md): Copies an existing tag to a new dictionary object.
- [CMTagGetFlagsValue](cmtaggetflagsvalue.md): Retrieves a tag’s value as a 64-bit field flag.
- [CMTagGetFloat64Value](cmtaggetfloat64value.md): Retrieves a tag’s value as a 64-bit floating point number.
- [CMTagGetSInt64Value](cmtaggetsint64value.md): Retrieves a tag’s value as a signed 64-bit integer.
- [CMTagGetValue](cmtaggetvalue.md): Retrieves a tag’s value as an uninterpreted 64-bit wide unsigned integer.
