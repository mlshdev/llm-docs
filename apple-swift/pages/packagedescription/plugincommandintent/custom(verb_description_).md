> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/plugincommandintent/custom(verb:description:)

# PluginCommandIntent.custom(verb:description:)

**Framework:** PackageDescription  
**Kind:** Case  
**Availability:** SwiftPM 5.6+

A custom command plug-in intent.

## Declaration

```swift
case custom(verb: String, description: String)
```

## Parameters

- `verb`: The invocation verb of the plug-in.
- `description`: A human readable description of the plug-in’s role.

<a id="discussion"></a>

## Discussion

Use this case when none of the predefined cases fulfill the role of the plug-in.

## See Also

### Creating a Command Intent

- [documentationGeneration()](documentationgeneration%28%29.md): The plugin generates documentation.
- [sourceCodeFormatting()](sourcecodeformatting%28%29.md): The plug-in formats source code.
