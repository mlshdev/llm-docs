> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibrary/librarywithapiversion:options:error:](https://developer.apple.com/documentation/ituneslibrary/itlibrary/librarywithapiversion:options:error:)

# libraryWithAPIVersion:options:error:

**Interface language:** Objective-C

**Framework:** iTunes Library  
**Kind:** Type Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.14+

Creates and initializes an instance of ITLibrary that can retrieve media entities.

## Declaration

```objectivec
+ (instancetype) libraryWithAPIVersion:(NSString *) requestedAPIVersion options:(ITLibInitOptions) options error:(NSError **) error;
```

## Parameters

- `requestedAPIVersion`: The version of the iTunesLibrary API that the app is requesting. Provide “1.0” if unknown.
- `options`: Options that change the initialization behavior. See [ITLibInitOptions](../itlibinitoptions.md).
- `error`: A pointer to a variable that receives an [NSError](https://developer.apple.com/documentation/foundation/nserror) if this method fails. Can be `nil` if the error isn’t applicable to the caller.

<a id="return-value"></a>

## Return Value

An [ITLibrary](../itlibrary.md) instance that can retrieve media entities, or `nil` if the method fails.

<a id="Discussion"></a>

## Discussion

Unless you specify the [ITLibInitOptionLazyLoadData](../itlibinitoptions/lazyloaddata.md) option, the system reads and parses the default iTunes database for the current user during initialization of the [ITLibrary](../itlibrary.md) class. All media entities cache in memory until deallocation of the object occurs.

## See Also

### Essentials

- [initWithAPIVersion:error:](init%28apiversion_%29-71e74.md): Initializes an instance of [ITLibrary](../itlibrary.md) that can retrieve media entities.
- [initWithAPIVersion:options:error:](init%28apiversion_options_%29-9eorg.md): Initializes an instance of `ITLibrary` that can retrieve media entities.
- [libraryWithAPIVersion:error:](librarywithapiversion_error_.md): Creates and initializes an instance of `ITLibrary` that can retrieve media entities.
- [ITLibInitOptions](../itlibinitoptions.md): These constants describe initialization options for an iTunes library.
