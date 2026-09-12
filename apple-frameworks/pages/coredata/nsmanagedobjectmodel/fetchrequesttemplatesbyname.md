> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/fetchrequesttemplatesbyname](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/fetchrequesttemplatesbyname)

# fetchRequestTemplatesByName (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A dictionary of the receiver’s fetch request templates, keyed by name.

## Declaration

```swift
var fetchRequestTemplatesByName: [String : NSFetchRequest<any NSFetchRequestResult>] { get }
```

<a id="Discussion"></a>

## Discussion

If the template contains a predicate with substitution variables, you should instead use [fetchRequestFromTemplate(withName:substitutionVariables:)](fetchrequestfromtemplate%28withname_substitutionvariables_%29.md) to create a new fetch request.

## See Also

### Manipulating fetch request templates

- [fetchRequestTemplate(forName:)](fetchrequesttemplate%28forname_%29.md): Returns the fetch request with a specified name.
- [fetchRequestFromTemplate(withName:substitutionVariables:)](fetchrequestfromtemplate%28withname_substitutionvariables_%29.md): Returns a copy of the fetch request template with the variables substituted by values from the substitutions dictionary.
- [setFetchRequestTemplate(\_:forName:)](setfetchrequesttemplate%28__forname_%29.md): Associates the specified fetch request with the receiver using the given name.

# fetchRequestTemplatesByName (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A dictionary of the receiver’s fetch request templates, keyed by name.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,NSFetchRequest *> * fetchRequestTemplatesByName;
```

<a id="Discussion"></a>

## Discussion

If the template contains a predicate with substitution variables, you should instead use [fetchRequestFromTemplateWithName:substitutionVariables:](fetchrequestfromtemplate%28withname_substitutionvariables_%29.md) to create a new fetch request.

## See Also

### Manipulating fetch request templates

- [fetchRequestTemplateForName:](fetchrequesttemplate%28forname_%29.md): Returns the fetch request with a specified name.
- [fetchRequestFromTemplateWithName:substitutionVariables:](fetchrequestfromtemplate%28withname_substitutionvariables_%29.md): Returns a copy of the fetch request template with the variables substituted by values from the substitutions dictionary.
- [setFetchRequestTemplate:forName:](setfetchrequesttemplate%28__forname_%29.md): Associates the specified fetch request with the receiver using the given name.
