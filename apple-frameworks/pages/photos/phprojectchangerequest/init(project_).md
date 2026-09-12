> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phprojectchangerequest/init(project:)](https://developer.apple.com/documentation/photos/phprojectchangerequest/init(project:))

# init(project:) (Swift)

**Framework:** Photos  
**Kind:** Initializer  
**Availability:** macOS 10.13+

Creates a change request around the specified project.

## Declaration

```swift
init(project: PHProject)
```

## Parameters

- `project`: The project being changed in the request.

## See Also

### Creating Change Requests

- [title](title.md): The title of the change request.
- [projectExtensionData](projectextensiondata.md): Compressed project-specific data to use in the change request.

# initWithProject: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Creates a change request around the specified project.

## Declaration

```objectivec
- (instancetype) initWithProject:(PHProject *) project;
```

## Parameters

- `project`: The project being changed in the request.

## See Also

### Creating Change Requests

- [title](title.md): The title of the change request.
- [projectExtensionData](projectextensiondata.md): Compressed project-specific data to use in the change request.
