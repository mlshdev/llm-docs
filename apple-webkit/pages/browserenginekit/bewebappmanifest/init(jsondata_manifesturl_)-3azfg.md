> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bewebappmanifest/init(jsondata:manifesturl:)-3azfg](https://developer.apple.com/documentation/browserenginekit/bewebappmanifest/init(jsondata:manifesturl:)-3azfg)

# init(jsonData:manifestURL:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Initializer  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · macOS · tvOS 17.5+ · visionOS 1.2+ · watchOS 10.5+

Returns nil if manifestURL is invalid or jsonData cannot be parsed.

## Declaration

```swift
init?(jsonData: Data, manifestURL: URL)
```

## See Also

### Creating a web app manifest

- [init(JSONData:manifestURL:)](init%28jsondata_manifesturl_%29-4zjpz.md)

# initWithJSONData:manifestURL: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · macOS · tvOS 17.5+ · visionOS 1.2+ · watchOS 10.5+

Returns nil if manifestURL is invalid or jsonData cannot be parsed.

## Declaration

```objectivec
- (BEWebAppManifest *) initWithJSONData:(NSData *) jsonData manifestURL:(NSURL *) manifestURL;
```
