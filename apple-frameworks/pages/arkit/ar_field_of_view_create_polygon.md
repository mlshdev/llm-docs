> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ar_field_of_view_create_polygon](https://developer.apple.com/documentation/arkit/ar_field_of_view_create_polygon)

# ar_field_of_view_create_polygon

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Function  
**Availability:** visionOS 27.0+

Create a polygon-based field of view.

## Declaration

```objectivec
extern ar_field_of_view_tar_field_of_view_create_polygon(ar_polygon_points_t polygon_points);
```

## Parameters

- `polygon_points`: Collection of polygon points defining the field of view region.

<a id="return-value"></a>

## Return Value

An instance of `ar_field_of_view_t` representing a custom polygon field of view.

<a id="discussion"></a>

## Discussion

The field of view region is defined using 2D points (u,v) in a tangent-angle coordinate system. Each point corresponds to a ray originating from the eye’s center of rotation, where: \- The u-coordinate represents the tangent of the horizontal field angle (positive values toward the temporal side, negative toward the nasal side) \- The v-coordinate represents the tangent of the vertical field angle (positive values upward, negative downward)

```
        For the right eye, each point {u,v} maps to the direction vector {u,v,-1} in HMD coordinate space.
        For the left eye, each point {u,v} maps to the direction vector {-u,v,-1}.

        Reference points: {0,0} represents the forward direction, {1,0} represents 45° temporal,
        {0,1} represents 45° up, {-1,0} represents 45° nasal, and {0,-1} represents 45° down.
```

> **Note**

> This type supports ARC. In non-ARC files, use `ar_retain()` and `ar_release()` to retain and release the object.

## See Also

### Visual fidelity

- [ar_polygon_points_add_point](ar_polygon_points_add_point.md): Adds a single point to the polygon points collection.
- [ar_polygon_points_add_points](ar_polygon_points_add_points.md): Adds multiple points to the polygon points collection.
- [ar_polygon_points_create](ar_polygon_points_create.md): Creates a new empty polygon points collection.
- [ar_polygon_points_get_count](ar_polygon_points_get_count.md): Gets the number of points in the collection.
- [ar_polygon_points_get_point_at_index](ar_polygon_points_get_point_at_index.md): Gets a point at a specific index.
- [ar_polygon_points_is_equal_to_polygon_points](ar_polygon_points_is_equal_to_polygon_points.md): Check if two polygon points collections are equal.
- [ar_polygon_points_t](ar_polygon_points_t.md): A collection of 2D polygon points.
- [ar_reference_object_configuration_t](ar_reference_object_configuration_t.md): Defines a configuration for an individual reference object.
- [ar_field_of_view_anchor_get_identifier](ar_field_of_view_anchor_get_identifier.md): Get the identifier of the field of view anchor.
- [ar_field_of_view_anchor_get_left_polygon_points](ar_field_of_view_anchor_get_left_polygon_points.md): Get the left eye polygon boundary points defining the preset FoV.
- [ar_field_of_view_anchor_get_origin_from_anchor_transform](ar_field_of_view_anchor_get_origin_from_anchor_transform.md): Get the transform from the anchor to the origin coordinate system.
- [ar_field_of_view_anchor_get_origin_from_anchor_transform_with_correction](ar_field_of_view_anchor_get_origin_from_anchor_transform_with_correction.md): Get the transform from an anchor to the origin coordinate system with a transform correction option.
- [ar_field_of_view_anchor_get_right_polygon_points](ar_field_of_view_anchor_get_right_polygon_points.md): Get the right eye polygon boundary points defining the preset FoV.
- [ar_field_of_view_anchor_get_timestamp](ar_field_of_view_anchor_get_timestamp.md): Get the timestamp of the field of view anchor.
- [ar_field_of_view_anchor_is_equal_to_field_of_view_anchor](ar_field_of_view_anchor_is_equal_to_field_of_view_anchor.md): Check if two field of view anchors are equal.
