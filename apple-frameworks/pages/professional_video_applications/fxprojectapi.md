> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxprojectapi](https://developer.apple.com/documentation/professional_video_applications/fxprojectapi)

# FxProjectAPI (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.2+

Methods you use to get information about the project in which your plug-in instance is running.

## Declaration

```swift
protocol FxProjectAPI
```

## Topics

### Getting Project Information from the Host

- [mediaFolderURL(\_:)](fxprojectapi/mediafolderurl%28__%29.md): Provides the security-scoped URL for a plug-in data folder within a project’s media folder.
- [documentID(\_:)](fxprojectapi/documentid%28__%29.md): Provides the document ID number of the host’s project.

## Relationships

### Inherited By

- [FxProjectAPI_v2](fxprojectapi_v2.md)

## See Also

### Accessing host data

- [FxProjectAPI_v2](fxprojectapi_v2.md): The method you use to get aspect ratio information about the project in which your plug-in instance is running.

# FxProjectAPI (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

Methods you use to get information about the project in which your plug-in instance is running.

## Declaration

```objectivec
@protocol FxProjectAPI
```

## Topics

### Getting Project Information from the Host

- [mediaFolderURL:error:](fxprojectapi/mediafolderurl%28__%29.md): Provides the security-scoped URL for a plug-in data folder within a project’s media folder.
- [documentID:error:](fxprojectapi/documentid%28__%29.md): Provides the document ID number of the host’s project.

## Relationships

### Inherited By

- [FxProjectAPI_v2](fxprojectapi_v2.md)

## See Also

### Accessing host data

- [FxProjectAPI_v2](fxprojectapi_v2.md): The method you use to get aspect ratio information about the project in which your plug-in instance is running.
