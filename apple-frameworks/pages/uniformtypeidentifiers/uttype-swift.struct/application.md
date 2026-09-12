> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/application](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/application)

# application

**Framework:** Uniform Type Identifiers  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A base type that represents a macOS, iOS, iPadOS, watchOS, and tvOS app.

## Declaration

```swift
static var application: UTType { get }
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `com.apple.application`.

This type conforms to [UTTypeExecutable](../uttypeexecutable.md).

## See Also

### Apple system base types

- [item](item.md): A generic base type for most objects, such as files or directories.
- [content](content.md): A base type that represents anything containing user-viewable content.
- [compositeContent](compositecontent.md): A base type that represents a content format supporting mixed embedded content.
- [data](data.md): A base type that represents any sort of byte stream, including files and in-memory data.
- [resolvable](resolvable.md): A base type that represents a resolvable reference, including symbolic links and aliases.
- [package](package.md): A base type that represents a packaged directory.
- [bundle](bundle.md): A base type that represents a directory that conforms to one of the bundle layouts.
- [pluginBundle](pluginbundle.md): A base type that represents a bundle-based plug-in.
- [sourceCode](sourcecode.md): A base type that represents source code of any programming language.
- [bookmark](bookmark.md): A base type that represents bookmark data.
- [log](log.md): A base type that represents console log data.
