> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibrary/init(apiversion:)-71e74](https://developer.apple.com/documentation/ituneslibrary/itlibrary/init(apiversion:)-71e74)

# init(apiVersion:) (Swift)

**Framework:** iTunes Library  
**Kind:** Initializer  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

Initializes an instance of [ITLibrary](../itlibrary.md) that can retrieve media entities.

## Declaration

```swift
convenience init(apiVersion requestedAPIVersion: String) throws
```

## Parameters

- `requestedAPIVersion`: The version of the iTunesLibrary API that the app is requesting. Provide `"1.0"` if unknown.

<a id="return-value"></a>

## Return Value

An [ITLibrary](../itlibrary.md) instance that can retrieve media entities, or `nil` if the method fails.

<a id="Discussion"></a>

## Discussion

During initialization of the [ITLibrary](../itlibrary.md) class, the system reads and parses the default iTunes database for the current user. All media entities cache in memory until deallocation of the object occurs.

Listing 1.

```objc
#import <iTunesLibrary/ITLibrary.h>
 
NSError * error = nil;
ITLibrary* library = [[ITLibrary alloc] initWithAPIVersion:@"1.0" error:&error];
if (library)
{
  NSArray playlists = library.allPlaylists; //  <- NSArray of ITLibPlaylist
  NSArray mediaItems = library.allMediaItems; //  <- NSArray of ITLibMediaItem
}
```

## See Also

### Essentials

- [init(apiVersion:options:)](init%28apiversion_options_%29-9eorg.md): Initializes an instance of `ITLibrary` that can retrieve media entities.
- [ITLibInitOptions](../itlibinitoptions.md): These constants describe initialization options for an iTunes library.

# initWithAPIVersion:error: (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

Initializes an instance of [ITLibrary](../itlibrary.md) that can retrieve media entities.

## Declaration

```objectivec
- (instancetype) initWithAPIVersion:(NSString *) requestedAPIVersion error:(NSError **) error;
```

## Parameters

- `requestedAPIVersion`: The version of the iTunesLibrary API that the app is requesting. Provide `"1.0"` if unknown.
- `error`: A pointer to a variable that receives an [NSError](https://developer.apple.com/documentation/foundation/nserror) if this method fails. Can be `nil` if the error isn’t applicable to the caller.

<a id="return-value"></a>

## Return Value

An [ITLibrary](../itlibrary.md) instance that can retrieve media entities, or `nil` if the method fails.

<a id="Discussion"></a>

## Discussion

During initialization of the [ITLibrary](../itlibrary.md) class, the system reads and parses the default iTunes database for the current user. All media entities cache in memory until deallocation of the object occurs.

Listing 1.

```objc
#import <iTunesLibrary/ITLibrary.h>
 
NSError * error = nil;
ITLibrary* library = [[ITLibrary alloc] initWithAPIVersion:@"1.0" error:&error];
if (library)
{
  NSArray playlists = library.allPlaylists; //  <- NSArray of ITLibPlaylist
  NSArray mediaItems = library.allMediaItems; //  <- NSArray of ITLibMediaItem
}
```

## See Also

### Essentials

- [initWithAPIVersion:options:error:](init%28apiversion_options_%29-9eorg.md): Initializes an instance of `ITLibrary` that can retrieve media entities.
- [libraryWithAPIVersion:error:](librarywithapiversion_error_.md): Creates and initializes an instance of `ITLibrary` that can retrieve media entities.
- [libraryWithAPIVersion:options:error:](librarywithapiversion_options_error_.md): Creates and initializes an instance of ITLibrary that can retrieve media entities.
- [ITLibInitOptions](../itlibinitoptions.md): These constants describe initialization options for an iTunes library.
