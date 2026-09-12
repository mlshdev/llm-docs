> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/file_metadata/mdimporter/importerimportdata](https://developer.apple.com/documentation/coreservices/file_metadata/mdimporter/importerimportdata)

# ImporterImportData

**Interface language:** Objective-C

**Framework:** Core Services

Defines a pointer toan importer import callback that imports importers.

## Declaration

```objectivec
typedef Boolean (* ImporterImportData)
(
void *thisInterface,
CFMutableDictionaryRef attributes,
CFStringRef contentTypeUTI,
CFStringRef pathToFile
)
```

## Parameters

- `thisInterface`: The CFPlugin object that is called. This value is passed to the callback function.
- `attributes`: A mutable dictionary that you should populate with the metadata key/value pairs. This dictionary is created and passed to the callback function.
- `contentTypeUTI`: The content type of the file as a uniform type identifier. This value is passed to the callback function.
- `pathToFile`: The full path to the file. This value is passed to the callback function.

<a id="return_value"></a>

## Return Value

Your callback functionshould return `true` if the metadatawas successfully returned, `false` ifthe metadata was not returned.
