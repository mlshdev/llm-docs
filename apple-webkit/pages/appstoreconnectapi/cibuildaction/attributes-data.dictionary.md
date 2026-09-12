> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildaction/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/cibuildaction/attributes-data.dictionary)

# CiBuildAction.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The attributes that describe a Build Actions resource.

## Declaration

```
object CiBuildAction.Attributes
```

## Properties

- `actionType` — `CiActionType`: The type of the build action.
- `completionStatus` — `CiCompletionStatus`: The status of the action.
- `executionProgress` — `CiExecutionProgress`: A string that indicates the progress of the build action.
- `finishedDate` — `date-time`: The date and time when Xcode Cloud finished performing the action.
- `isRequiredToPass` — `boolean`: A Boolean value that indicates whether the action must succeed in order for a build to succeed.
- `issueCounts` — `CiIssueCounts`: An integer value that represents the number of issues Xcode Cloud encountered when it performed the action.
- `name` — `string`: The name of the build action; for example, `Archive iOS`.
- `startedDate` — `date-time`: The date and time when Xcode Cloud started performing the action.

## Topics

### Types

- [CiActionType](../ciactiontype.md): A string that represents the type of an Xcode Cloud workflow’s action.

## See Also

### Objects

- [CiBuildAction.Relationships](relationships-data.dictionary.md): The relationships of the Build Actions resource you included in the request and those on which you can operate.
