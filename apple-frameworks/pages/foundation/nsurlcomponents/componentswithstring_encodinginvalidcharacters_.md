> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlcomponents/componentswithstring:encodinginvalidcharacters:](https://developer.apple.com/documentation/foundation/nsurlcomponents/componentswithstring:encodinginvalidcharacters:)

# componentsWithString:encodingInvalidCharacters:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns a URL components instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.

## Declaration

```objectivec
+ (instancetype) componentsWithString:(NSString *) URLString encodingInvalidCharacters:(BOOL) encodingInvalidCharacters;
```

## Parameters

- `URLString`: The URL string to parse.
- `encodingInvalidCharacters`: A Boolean value that indicates whether the initializer attempts to encode any invalid characters in `URLString`.

<a id="return-value"></a>

## Return Value

A URL components instance from the provided string, optionally with invalid characters percent-encoded.

<a id="Discussion"></a>

## Discussion

If `encodingInvalidCharacters` is `true`, this initializer tries to encode the string to create a valid URL. If the URL string is still invalid after encoding, the method returns `nil`.

## See Also

### Creating URL components

- [componentsWithString:](componentswithstring_.md): Returns a URL components object by parsing a URL in string form.
- [componentsWithURL:resolvingAgainstBaseURL:](componentswithurl_resolvingagainstbaseurl_.md): Returns a URL components object by parsing the URL from an `NSURL` object.
- [init](init%28%29.md): Creates a URL components object with all components left undefined.
- [initWithString:](init%28string_%29.md): Creates a URL components object by parsing a URL in string form.
- [initWithString:encodingInvalidCharacters:](init%28string_encodinginvalidcharacters_%29.md): Creates a URL components instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
- [initWithURL:resolvingAgainstBaseURL:](init%28url_resolvingagainstbaseurl_%29-3bbte.md): Creates a URL components object by parsing the URL from an `NSURL` object.
