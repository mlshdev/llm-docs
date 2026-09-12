> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlcomponents/componentswithstring:](https://developer.apple.com/documentation/foundation/nsurlcomponents/componentswithstring:)

# componentsWithString:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a URL components object by parsing a URL in string form.

## Declaration

```objectivec
+ (instancetype) componentsWithString:(NSString *) URLString;
```

## Parameters

- `URLString`: The URL string to parse.

<a id="return-value"></a>

## Return Value

Returns the new URL components object, or `nil` if the URL string could not be parsed.

## See Also

### Creating URL components

- [componentsWithString:encodingInvalidCharacters:](componentswithstring_encodinginvalidcharacters_.md): Returns a URL components instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
- [componentsWithURL:resolvingAgainstBaseURL:](componentswithurl_resolvingagainstbaseurl_.md): Returns a URL components object by parsing the URL from an `NSURL` object.
- [init](init%28%29.md): Creates a URL components object with all components left undefined.
- [initWithString:](init%28string_%29.md): Creates a URL components object by parsing a URL in string form.
- [initWithString:encodingInvalidCharacters:](init%28string_encodinginvalidcharacters_%29.md): Creates a URL components instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
- [initWithURL:resolvingAgainstBaseURL:](init%28url_resolvingagainstbaseurl_%29-3bbte.md): Creates a URL components object by parsing the URL from an `NSURL` object.
