# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: ClientStatistics.proto
# Protobuf Python Version: 5.29.2
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    29,
    2,
    '',
    'ClientStatistics.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x16\x43lientStatistics.proto\"\x8a\x04\n\x10\x43lientStatistics\x12\x11\n\tnano_time\x18\x01 \x01(\x03\x12\x15\n\rmax_memory_mb\x18\x02 \x01(\x03\x12\x16\n\x0e\x66ree_memory_mb\x18\x03 \x01(\x03\x12\x16\n\x0eused_memory_mb\x18\x04 \x01(\x03\x12#\n\x1bprocess_cpu_load_percentage\x18\x05 \x01(\x01\x12\x1c\n\x14\x61vailable_processors\x18\x06 \x01(\x05\x12\x15\n\rtotal_threads\x18\x07 \x01(\x03\x12\n\n\x02ip\x18\x08 \x01(\t\x12\x10\n\x08hostname\x18\t \x01(\t\x12\x12\n\nprocess_id\x18\n \x01(\t\x12\x14\n\x0cjava_version\x18\x0b \x01(\t\x12\x13\n\x0bjava_vendor\x18\x0c \x01(\t\x12\x10\n\x08jvm_name\x18\r \x01(\t\x12\x1d\n\x06health\x18\x0e \x01(\x0e\x32\r.HealthStatus\x12\x14\n\x07version\x18\x0f \x01(\tH\x00\x88\x01\x01\x12\x11\n\x04type\x18\x10 \x01(\tH\x01\x88\x01\x01\x12\x11\n\x04uuid\x18\x11 \x01(\tH\x02\x88\x01\x01\x12\x18\n\x0b\x62uffer_size\x18\x12 \x01(\x05H\x03\x88\x01\x01\x12\x1c\n\x0fmax_buffer_size\x18\x13 \x01(\x05H\x04\x88\x01\x01\x42\n\n\x08_versionB\x07\n\x05_typeB\x07\n\x05_uuidB\x0e\n\x0c_buffer_sizeB\x12\n\x10_max_buffer_size*Y\n\x0cHealthStatus\x12\x08\n\x04GOOD\x10\x00\x12\x08\n\x04OKAY\x10\x01\x12\x0c\n\x08STRESSED\x10\x02\x12\x0c\n\x08OVERLOAD\x10\x03\x12\x0c\n\x08\x43RITICAL\x10\x04\x12\x0b\n\x07UNKNOWN\x10\x05\x62\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ClientStatistics_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  DESCRIPTOR._loaded_options = None
  _globals['_HEALTHSTATUS']._serialized_start=551
  _globals['_HEALTHSTATUS']._serialized_end=640
  _globals['_CLIENTSTATISTICS']._serialized_start=27
  _globals['_CLIENTSTATISTICS']._serialized_end=549
# @@protoc_insertion_point(module_scope)
