> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/plugincommandintent/documentationgeneration](https://developer.apple.com/documentation/packagedescription/plugincommandintent/documentationgeneration)

# PluginCommandIntent.documentationGeneration

**Framework:** PackageDescription  
**Kind:** Case  
**Availability:** SwiftPM 5.6+

The plug-in generates documentation.

## Declaration

```swift
case documentationGeneration
```

<a id="discussion"></a>

## Discussion

The command used to generate documentation, either by parsing the package contents directly or by using the build system support for generating symbol graphs. Invoked by a `generate-documentation` verb to `swift package`.
