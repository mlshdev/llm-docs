> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypeinternetlocation](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypeinternetlocation)

# UTTypeInternetLocation

**Interface language:** Objective-C

**Framework:** Uniform Type Identifiers  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A base type that represents an Apple internet location file.

## Declaration

```objectivec
extern UTType * const UTTypeInternetLocation;
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `com.apple.internet-location`.

This type conforms to [UTTypeData](uttypedata.md) and a base type identified by `public.stored-url`.

## See Also

### Internet-specific

- [UTTypeHTML](uttypehtml.md): A type that represents any version of HTML.
- [UTTypeWebArchive](uttypewebarchive.md): A type that represents WebKit web archive data.
- [UTTypeInternetShortcut](uttypeinternetshortcut.md): A type that represents a Microsoft internet shortcut file.
