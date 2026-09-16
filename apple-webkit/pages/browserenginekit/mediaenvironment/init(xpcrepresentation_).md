> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/browserenginekit/mediaenvironment/init(xpcrepresentation:)

# init(xpcRepresentation:)

**Framework:** BrowserEngineKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Creates a media environment from an XPC representation.

## Declaration

```swift
init(xpcRepresentation: xpc_object_t) throws
```

## Parameters

- `xpcRepresentation`: An encoded representation of the media environment to create.

## See Also

### Creating a media environment

- [init(webPage:)](init%28webpage_%29.md): Creates a new media environment identified by the URL.
