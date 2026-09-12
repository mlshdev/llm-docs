> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypereference/referenceurl](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypereference/referenceurl)

# referenceURL (Swift)

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The reference URL for the type.

## Declaration

```swift
var referenceURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

A reference URL is a human-readable document that describes a type. Most types don’t specify reference URLs.

> **Warning**

>  The system doesn’t validate the URL, nor does it guarantee its scheme or structure.

# referenceURL (Objective-C)

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The reference URL for the type.

## Declaration

```objectivec
@property (readonly, nullable) NSURL * referenceURL;
```

<a id="Discussion"></a>

## Discussion

A reference URL is a human-readable document that describes a type. Most types don’t specify reference URLs.

> **Warning**

>  The system doesn’t validate the URL, nor does it guarantee its scheme or structure.

## See Also

### Obtaining additional type information

- [declared](isdeclared.md): A Boolean value that indicates whether the system declares the type.
- [dynamic](isdynamic.md): A Boolean value that indicates whether the system generates the type.
- [publicType](ispublic.md): A Boolean value that indicates whether the type is in the public domain.
- [version](version.md): The type’s version, if available.
