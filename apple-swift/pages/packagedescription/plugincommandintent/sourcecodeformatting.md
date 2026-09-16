> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/plugincommandintent/sourcecodeformatting

# PluginCommandIntent.sourceCodeFormatting

**Framework:** PackageDescription  
**Kind:** Case  
**Availability:** SwiftPM 5.6+

The plug-in formats source code.

## Declaration

```swift
case sourceCodeFormatting
```

<a id="discussion"></a>

## Discussion

The command used to modify the source code in the package based on a set of rules. Invoked by a `format-source-code` verb to `swift package`.
