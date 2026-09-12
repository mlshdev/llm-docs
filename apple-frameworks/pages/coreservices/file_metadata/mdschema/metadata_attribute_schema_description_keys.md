> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/file_metadata/mdschema/metadata_attribute_schema_description_keys](https://developer.apple.com/documentation/coreservices/file_metadata/mdschema/metadata_attribute_schema_description_keys)

# Metadata Attribute Schema Description Keys

**Interface languages:** Swift, Objective-C

**Framework:** Core Services  
**Kind:** API Collection

Specify the schema of a metadata attribute key.

<a id="overview"></a>

## Overview

These keys are in the dictionary returned by the function `MDSchemaCopyMetaAttributesForAttribute`.

## Topics

### Constants

- [kMDAttributeName](../../kmdattributename.md): A string containing the name of the metadataattribute key.
- [kMDAttributeType](../../kmdattributetype.md): A CFNumberRef or CFTypeId describing thetype of data returned as the value of the metadata attribute key.
- [kMDAttributeMultiValued](../../kmdattributemultivalued.md): A boolean that indicates if the metadataattribute value is multi-valued. If this is `TRUE`,the metadata attribute value is an array of the types specifiedin `kMDAttributeType`.
