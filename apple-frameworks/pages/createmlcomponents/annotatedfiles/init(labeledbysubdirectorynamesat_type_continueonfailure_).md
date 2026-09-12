> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/annotatedfiles/init(labeledbysubdirectorynamesat:type:continueonfailure:)](https://developer.apple.com/documentation/createmlcomponents/annotatedfiles/init(labeledbysubdirectorynamesat:type:continueonfailure:))

# init(labeledBySubdirectoryNamesAt:type:continueOnFailure:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Reads training examples from a directory containing files in labeled sub-directories.

## Declaration

```swift
init(labeledBySubdirectoryNamesAt url: URL, type: UTType, continueOnFailure: Bool = false) throws
```

## Parameters

- `url`: URL of directory containing the files.
- `type`: Type of files.
- `continueOnFailure`: A Boolean value indicating whether to continue reading files after encountering a file that is not readable. The default value is `false`.

<a id="discussion"></a>

## Discussion

Take for example this directory structure:

```
/
    foo/
        file1.png
        file2.png
    bar/
        file3.png
        file4.png
```

It would produce two labels (foo and bar) with two URLs each.

## See Also

### Creating the feature

- [init(labeledByNamesAt:separator:index:type:continueOnFailure:)](init%28labeledbynamesat_separator_index_type_continueonfailure_%29.md): Reads training examples from a directory containing files having their labels in the name. The name can contain multiple words separated by a `separator`. So the `index` tells the position of the label in the file name. Files with incorrect name format are ignored.
