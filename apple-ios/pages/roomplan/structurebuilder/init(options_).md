> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/roomplan/structurebuilder/init(options:)

# init(options:)

**Framework:** RoomPlan  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Creates a structure builder using the specified options.

## Declaration

```swift
init(options: StructureBuilder.ConfigurationOptions)
```

## Parameters

- `options`: An option set to customize the captured structure.

<a id="discussion"></a>

## Discussion

Pass the `StructureBuilder/ConfigurationOptions/beautifyObjects` option to enhance the look of the output for the captured structure, or  (`[]`) to omit capture post-processing.

## See Also

### Creating a structure builder

- [StructureBuilder.ConfigurationOptions](configurationoptions.md): Options that configure a structure builder.
