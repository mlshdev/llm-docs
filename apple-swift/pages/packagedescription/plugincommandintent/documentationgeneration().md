> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/plugincommandintent/documentationgeneration()](https://developer.apple.com/documentation/packagedescription/plugincommandintent/documentationgeneration())

# documentationGeneration()

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.6+

The plugin generates documentation.

## Declaration

```swift
static func documentationGeneration() -> PluginCommandIntent
```

<a id="return-value"></a>

## Return Value

A `PluginCommandIntent` instance.

<a id="discussion"></a>

## Discussion

The intent of the command is to generate documentation, either by parsing the package contents directly or by using the build system support for generating symbol graphs. Invoked by a `generate-documentation` verb to `swift package`.

## See Also

### Creating a Command Intent

- [sourceCodeFormatting()](sourcecodeformatting%28%29.md): The plug-in formats source code.
- [PluginCommandIntent.custom(verb:description:)](custom%28verb_description_%29.md): A custom command plug-in intent.
