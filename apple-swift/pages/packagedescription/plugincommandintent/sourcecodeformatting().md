> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/plugincommandintent/sourcecodeformatting()](https://developer.apple.com/documentation/packagedescription/plugincommandintent/sourcecodeformatting())

# sourceCodeFormatting()

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.6+

The plug-in formats source code.

## Declaration

```swift
static func sourceCodeFormatting() -> PluginCommandIntent
```

<a id="return-value"></a>

## Return Value

A `PluginCommandIntent` instance.

<a id="discussion"></a>

## Discussion

The intent of the command is to modify the source code in the package based on a set of rules. Invoked by a `format-source-code` verb to `swift package`.

## See Also

### Creating a Command Intent

- [documentationGeneration()](documentationgeneration%28%29.md): The plugin generates documentation.
- [PluginCommandIntent.custom(verb:description:)](custom%28verb_description_%29.md): A custom command plug-in intent.
