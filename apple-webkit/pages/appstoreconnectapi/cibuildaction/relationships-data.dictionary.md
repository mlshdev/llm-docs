> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildaction/relationships-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/cibuildaction/relationships-data.dictionary)

# CiBuildAction.Relationships

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The relationships of the Build Actions resource you included in the request and those on which you can operate.

## Declaration

```
object CiBuildAction.Relationships
```

## Properties

- `artifacts` — `CiBuildAction.Relationships.Artifacts`:
- `buildRun` — `CiBuildAction.Relationships.BuildRun`: The data and links that describe the relationship between the Build Actions and the Build Runs resources.
- `issues` — `CiBuildAction.Relationships.Issues`:
- `testResults` — `CiBuildAction.Relationships.TestResults`:

## Topics

### Objects

- [CiBuildAction.Relationships.BuildRun](relationships-data.dictionary/buildrun-data.dictionary.md): The data and links that describe the relationship between the Build Actions and Build Runs resources.

### Dictionaries

- [CiBuildAction.Relationships.Artifacts](relationships-data.dictionary/artifacts-data.dictionary.md)
- [CiBuildAction.Relationships.Issues](relationships-data.dictionary/issues-data.dictionary.md)
- [CiBuildAction.Relationships.TestResults](relationships-data.dictionary/testresults-data.dictionary.md)

## See Also

### Objects

- [CiBuildAction.Attributes](attributes-data.dictionary.md): The attributes that describe a Build Actions resource.
