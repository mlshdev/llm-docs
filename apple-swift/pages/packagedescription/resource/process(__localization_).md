> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/resource/process(_:localization:)](https://developer.apple.com/documentation/packagedescription/resource/process(_:localization:))

# process(\_:localization:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.3+

Applies a platform-specific rules to the resource at the given path.

## Declaration

```swift
static func process(_ path: String, localization: Resource.Localization? = nil) -> Resource
```

## Parameters

- `path`: The path for a resource.
- `localization`: The explicit localization type for the resource.

<a id="return-value"></a>

## Return Value

A `Resource` instance.

<a id="discussion"></a>

## Discussion

Use the `process` rule to process resources at the given path according to the platform Swift Package Manager builds the target for. For example, Swift Package Manager may optimize image files for platforms that support such optimizations. If no optimization is available for a file type, Swift Package Manager copies the file.

If the given path represents a directory, Swift Package Manager applies the process rule recursively to each file in the directory.

If possible, use this rule instead of [copy(\_:)](copy%28__%29.md).

## See Also

### Applying Rules

- [Resource.Localization](localization.md): Defines the explicit type of localization for resources.
- [copy(\_:)](copy%28__%29.md): Applies the copy rule to a resource at the given path.
- [embedInCode(\_:)](embedincode%28__%29.md): Applies the embed rule to a resource at the given path.
