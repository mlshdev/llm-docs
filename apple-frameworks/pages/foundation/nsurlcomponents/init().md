> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlcomponents/init()](https://developer.apple.com/documentation/foundation/nsurlcomponents/init())

# init() (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a URL components object with all components left undefined.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

Returns the initialized URL components object, or `nil` if an error occurs.

## See Also

### Creating URL components

- [init(string:)](init%28string_%29.md): Creates a URL components object by parsing a URL in string form.
- [init(string:encodingInvalidCharacters:)](init%28string_encodinginvalidcharacters_%29.md): Creates a URL components instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
- [init(url:resolvingAgainstBaseURL:)](init%28url_resolvingagainstbaseurl_%29-3bbte.md): Creates a URL components object by parsing the URL from an `NSURL` object.

# init (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a URL components object with all components left undefined.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

Returns the initialized URL components object, or `nil` if an error occurs.

## See Also

### Creating URL components

- [componentsWithString:](componentswithstring_.md): Returns a URL components object by parsing a URL in string form.
- [componentsWithString:encodingInvalidCharacters:](componentswithstring_encodinginvalidcharacters_.md): Returns a URL components instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
- [componentsWithURL:resolvingAgainstBaseURL:](componentswithurl_resolvingagainstbaseurl_.md): Returns a URL components object by parsing the URL from an `NSURL` object.
- [initWithString:](init%28string_%29.md): Creates a URL components object by parsing a URL in string form.
- [initWithString:encodingInvalidCharacters:](init%28string_encodinginvalidcharacters_%29.md): Creates a URL components instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
- [initWithURL:resolvingAgainstBaseURL:](init%28url_resolvingagainstbaseurl_%29-3bbte.md): Creates a URL components object by parsing the URL from an `NSURL` object.
