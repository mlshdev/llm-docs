> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/fetchrequestfromtemplate(withname:substitutionvariables:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/fetchrequestfromtemplate(withname:substitutionvariables:))

# fetchRequestFromTemplate(withName:substitutionVariables:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a copy of the fetch request template with the variables substituted by values from the substitutions dictionary.

## Declaration

```swift
func fetchRequestFromTemplate(withName name: String, substitutionVariables variables: [String : Any]) -> NSFetchRequest<any NSFetchRequestResult>?
```

## Parameters

- `name`: A string containing the name of a fetch request template.
- `variables`: A dictionary containing key-value pairs where the keys are the names of variables specified in the template; the corresponding values are substituted before the fetch request is returned. The dictionary must provide values for all the variables in the template.

<a id="return-value"></a>

## Return Value

A copy of the fetch request template with the variables substituted by values from `variables`.

<a id="Discussion"></a>

## Discussion

The `variables` dictionary must provide values for all the variables. If you want to test for a nil value, use `[NSNull null]`.

This method provides the usual way to bind an “abstractly” defined fetch request template to a concrete fetch. For more details on using this method, see [Creating Predicates](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/Articles/pCreating.html#//apple_ref/doc/uid/TP40001793).

## See Also

### Manipulating fetch request templates

- [fetchRequestTemplatesByName](fetchrequesttemplatesbyname.md): A dictionary of the receiver’s fetch request templates, keyed by name.
- [fetchRequestTemplate(forName:)](fetchrequesttemplate%28forname_%29.md): Returns the fetch request with a specified name.
- [setFetchRequestTemplate(\_:forName:)](setfetchrequesttemplate%28__forname_%29.md): Associates the specified fetch request with the receiver using the given name.

# fetchRequestFromTemplateWithName:substitutionVariables: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a copy of the fetch request template with the variables substituted by values from the substitutions dictionary.

## Declaration

```objectivec
- (NSFetchRequest *) fetchRequestFromTemplateWithName:(NSString *) name substitutionVariables:(NSDictionary<NSString *,id> *) variables;
```

## Parameters

- `name`: A string containing the name of a fetch request template.
- `variables`: A dictionary containing key-value pairs where the keys are the names of variables specified in the template; the corresponding values are substituted before the fetch request is returned. The dictionary must provide values for all the variables in the template.

<a id="return-value"></a>

## Return Value

A copy of the fetch request template with the variables substituted by values from `variables`.

<a id="Discussion"></a>

## Discussion

The `variables` dictionary must provide values for all the variables. If you want to test for a nil value, use `[NSNull null]`.

This method provides the usual way to bind an “abstractly” defined fetch request template to a concrete fetch. For more details on using this method, see [Creating Predicates](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/Articles/pCreating.html#//apple_ref/doc/uid/TP40001793).

## See Also

### Manipulating fetch request templates

- [fetchRequestTemplatesByName](fetchrequesttemplatesbyname.md): A dictionary of the receiver’s fetch request templates, keyed by name.
- [fetchRequestTemplateForName:](fetchrequesttemplate%28forname_%29.md): Returns the fetch request with a specified name.
- [setFetchRequestTemplate:forName:](setfetchrequesttemplate%28__forname_%29.md): Associates the specified fetch request with the receiver using the given name.
