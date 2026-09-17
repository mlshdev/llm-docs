> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/wkwebextension/defaultlocale

# defaultLocale (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The default locale for the extension.

## Declaration

```swift
var defaultLocale: Locale? { get }
```

<a id="discussion"></a>

## Discussion

Returns `nil` if there was no default locale specified.

# defaultLocale (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The default locale for the extension.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSLocale * defaultLocale;
```

<a id="discussion"></a>

## Discussion

Returns `nil` if there was no default locale specified.
