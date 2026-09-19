> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/modelio/mdlurltexture/url

# url (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The URL from which to load texture data.

## Declaration

```swift
var url: URL { get set }
```

<a id="Discussion"></a>

## Discussion

Changing a texture’s URL loads data from the new URL, replacing the existing data.

# URL (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The URL from which to load texture data.

## Declaration

```objectivec
@property (nonatomic, copy) NSURL * URL;
```

<a id="Discussion"></a>

## Discussion

Changing a texture’s URL loads data from the new URL, replacing the existing data.
