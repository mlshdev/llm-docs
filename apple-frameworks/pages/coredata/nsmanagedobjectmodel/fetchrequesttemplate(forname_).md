> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/fetchrequesttemplate(forname:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/fetchrequesttemplate(forname:))

# fetchRequestTemplate(forName:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the fetch request with a specified name.

## Declaration

```swift
func fetchRequestTemplate(forName name: String) -> NSFetchRequest<any NSFetchRequestResult>?
```

## Parameters

- `name`: A string containing the name of a fetch request template.

<a id="return-value"></a>

## Return Value

The fetch request named `name`.

<a id="Discussion"></a>

## Discussion

If the template contains substitution variables, you should instead use [fetchRequestFromTemplate(withName:substitutionVariables:)](fetchrequestfromtemplate%28withname_substitutionvariables_%29.md) to create a new fetch request.

## See Also

### Manipulating fetch request templates

- [fetchRequestTemplatesByName](fetchrequesttemplatesbyname.md): A dictionary of the receiver’s fetch request templates, keyed by name.
- [fetchRequestFromTemplate(withName:substitutionVariables:)](fetchrequestfromtemplate%28withname_substitutionvariables_%29.md): Returns a copy of the fetch request template with the variables substituted by values from the substitutions dictionary.
- [setFetchRequestTemplate(\_:forName:)](setfetchrequesttemplate%28__forname_%29.md): Associates the specified fetch request with the receiver using the given name.

# fetchRequestTemplateForName: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the fetch request with a specified name.

## Declaration

```objectivec
- (NSFetchRequest *) fetchRequestTemplateForName:(NSString *) name;
```

## Parameters

- `name`: A string containing the name of a fetch request template.

<a id="return-value"></a>

## Return Value

The fetch request named `name`.

<a id="Discussion"></a>

## Discussion

If the template contains substitution variables, you should instead use [fetchRequestFromTemplateWithName:substitutionVariables:](fetchrequestfromtemplate%28withname_substitutionvariables_%29.md) to create a new fetch request.

## See Also

### Manipulating fetch request templates

- [fetchRequestTemplatesByName](fetchrequesttemplatesbyname.md): A dictionary of the receiver’s fetch request templates, keyed by name.
- [fetchRequestFromTemplateWithName:substitutionVariables:](fetchrequestfromtemplate%28withname_substitutionvariables_%29.md): Returns a copy of the fetch request template with the variables substituted by values from the substitutions dictionary.
- [setFetchRequestTemplate:forName:](setfetchrequesttemplate%28__forname_%29.md): Associates the specified fetch request with the receiver using the given name.
