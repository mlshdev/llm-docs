> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypeinternetshortcut](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypeinternetshortcut)

# UTTypeInternetShortcut

**Interface language:** Objective-C

**Framework:** Uniform Type Identifiers  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents a Microsoft internet shortcut file.

## Declaration

```objectivec
extern UTType * const UTTypeInternetShortcut;
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `com.microsoft.internet-shortcut`.

This type conforms to [UTTypeData](uttypedata.md) and a base type identified by `public.stored-url`.

## See Also

### Internet-specific

- [UTTypeHTML](uttypehtml.md): A type that represents any version of HTML.
- [UTTypeWebArchive](uttypewebarchive.md): A type that represents WebKit web archive data.
- [UTTypeInternetLocation](uttypeinternetlocation.md): A base type that represents an Apple internet location file.
