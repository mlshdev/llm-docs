> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/file_metadata/mdschema/available_metadata_attribute_keys](https://developer.apple.com/documentation/coreservices/file_metadata/mdschema/available_metadata_attribute_keys)

# Available Metadata Attribute Keys

**Interface languages:** Swift, Objective-C

**Framework:** Core Services  
**Kind:** API Collection

Specify the available metadata attribute keys for a contenttype.

<a id="overview"></a>

## Overview

These keys are in the dictionary returned by the function `MDSchemaCopyAttributesForContentType`.

## Topics

### Constants

- [kMDAttributeDisplayValues](../../kmdattributedisplayvalues.md): An array of strings containing the availabledisplay metadata attribute keys, or `NULL` ifthe type is not known by the system.
- [kMDAttributeAllValues](../../kmdattributeallvalues.md): An array of strings containing the availablemetadata attribute keys, or `NULL` ifthe type is not known by the system.
- [kMDAttributeReadOnlyValues](../../kmdattributereadonlyvalues.md): An array of strings containing the read-onlymetadata attribute keys, or `NULL` ifthe type is not known by the system.
- [kMDExporterAvaliable](../../kmdexporteravaliable.md): A CFBoolean that indicates if an exporter is available for this UTI type.
