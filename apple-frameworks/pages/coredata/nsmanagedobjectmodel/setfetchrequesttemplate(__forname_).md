> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/setfetchrequesttemplate(_:forname:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/setfetchrequesttemplate(_:forname:))

# setFetchRequestTemplate(\_:forName:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Associates the specified fetch request with the receiver using the given name.

## Declaration

```swift
func setFetchRequestTemplate(_ fetchRequestTemplate: NSFetchRequest<any NSFetchRequestResult>?, forName name: String)
```

## Parameters

- `fetchRequestTemplate`: A fetch request, typically containing predicates with variables for substitution.
- `name`: A string that specifies the name of the fetch request template.

<a id="Discussion"></a>

## Discussion

For more details on using this method, see [Creating Predicates](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/Articles/pCreating.html#//apple_ref/doc/uid/TP40001793).

<a id="Special-Considerations"></a>

### Special Considerations

This method raises an exception if the receiver has been used by an object graph manager.

## See Also

### Manipulating fetch request templates

- [fetchRequestTemplatesByName](fetchrequesttemplatesbyname.md): A dictionary of the receiver’s fetch request templates, keyed by name.
- [fetchRequestTemplate(forName:)](fetchrequesttemplate%28forname_%29.md): Returns the fetch request with a specified name.
- [fetchRequestFromTemplate(withName:substitutionVariables:)](fetchrequestfromtemplate%28withname_substitutionvariables_%29.md): Returns a copy of the fetch request template with the variables substituted by values from the substitutions dictionary.

# setFetchRequestTemplate:forName: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Associates the specified fetch request with the receiver using the given name.

## Declaration

```objectivec
- (void) setFetchRequestTemplate:(NSFetchRequest *) fetchRequestTemplate forName:(NSString *) name;
```

## Parameters

- `fetchRequestTemplate`: A fetch request, typically containing predicates with variables for substitution.
- `name`: A string that specifies the name of the fetch request template.

<a id="Discussion"></a>

## Discussion

For more details on using this method, see [Creating Predicates](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/Articles/pCreating.html#//apple_ref/doc/uid/TP40001793).

<a id="Special-Considerations"></a>

### Special Considerations

This method raises an exception if the receiver has been used by an object graph manager.

## See Also

### Manipulating fetch request templates

- [fetchRequestTemplatesByName](fetchrequesttemplatesbyname.md): A dictionary of the receiver’s fetch request templates, keyed by name.
- [fetchRequestTemplateForName:](fetchrequesttemplate%28forname_%29.md): Returns the fetch request with a specified name.
- [fetchRequestFromTemplateWithName:substitutionVariables:](fetchrequestfromtemplate%28withname_substitutionvariables_%29.md): Returns a copy of the fetch request template with the variables substituted by values from the substitutions dictionary.
