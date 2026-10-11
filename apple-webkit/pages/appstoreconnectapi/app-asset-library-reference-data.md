> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/app-asset-library-reference-data

# App Asset Library reference data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Discover the valid asset specifications, placement groups, and limits for placements.

<a id="overview"></a>

## Overview

The `appAssetLibraryRefData` resource represents reference data that describes the valid asset specifications, dimensions, placement groups, and per-placement limits for the asset library. Use it to:

- List the reference data for the asset library.
- Read a specific reference data resource.

Query the reference data to learn what’s valid for a placement type before you upload an asset, instead of hard-coding specifications.

## Topics

### Getting reference data

- [List app asset library ref data](get-v1-appassetlibraryrefdata.md): List app asset library reference data.
- [Read an app asset library ref data](get-v1-appassetlibraryrefdata-_id_.md): Get information about an app asset library reference data resource.

### Objects and types

- [AppAssetLibraryRefDatum](appassetlibraryrefdatum.md): Reference data that describes the valid asset specifications, placement groups, and limits for the asset library.
- [AppAssetLibraryRefDataResponse](appassetlibraryrefdataresponse.md): The response body for endpoints that list app asset library reference data.
- [AppAssetLibraryRefDatumResponse](appassetlibraryrefdatumresponse.md): The response body for endpoints that read an app asset library reference data resource.
